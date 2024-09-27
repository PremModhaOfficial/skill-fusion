from django.conf import settings
from django.core.mail import send_mail
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.generics import (
    CreateAPIView,
    DestroyAPIView,
    ListAPIView,
    ListCreateAPIView,
)
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Course, Educator, Student, StudentProgress, User
from .serializers import (
    CourseSerializer,
    EducatorCreatorSerializer,
    EducatorSerializer,
    StudentSerializer,
    UserSerializer,
)
from .utils import send_email_to_client


def update_studentProgress(request, course_id):
    if request.method == "POST":
        student = Student.objects.get(user=request.user)
        course = Course.objects.get(id=course_id)

        student_progress = StudentProgress.objects.get(student=student, course=course)
        if student_progress is None:
            student_progress = StudentProgress.objects.create(
                student=student, course=course, progress=0
            )
            student_progress.save()
        else:
            current_progress = student_progress.progress
            new_prog = int(course.classes * current_progress / 100) + 1
            new_prog %= course.classes

            student_progress.progress = new_prog
            student_progress.save()

    return Response({"message": "Progress updated"})


@api_view(["POST"])
def payment(request):
    subject = "OTP for Verification Email id"
    if request.method == "POST":
        student = Student.objects.get(user=request.user)
        email = student.user.email
        print(email, "email")

        message = f"""
            Congrats {student.name}, 
            Your payment in skill-fusion is successful
        """
        from_email = settings.EMAIL_HOST_USER
        recipient = [email]

        send_mail(
            subject=subject,
            message=message,
            from_email=from_email,
            recipient_list=recipient,
        )
    return Response({"message": "Payment successful"})


@api_view(["PUT"])
def send_email_view(request):
    pk = request.data["pk"]
    send_email_to_client(request, pk=pk)
    return render(request, template_name="index.html")


class CreateStudentView(CreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Course.objects.all(user=user)

    def perform_create(self, serializer):
        serializer.save()  # The user will be set in the serializer's create method


class EducatorListView(ListAPIView):
    serializer_class = EducatorSerializer
    permission_classes = [AllowAny]
    queryset = Educator.objects.all()

    def get_queryset(self):

        return Educator.objects.all()


class EducatorCreateView(CreateAPIView):
    queryset = Educator.objects.all()
    serializer_class = EducatorCreatorSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Course.objects.all(user=user)

    def perform_create(self, serializer):
        serializer.save()  # The user will be set in the serializer's create method


class Whoami(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        res = serializer.data
        try:
            if hasattr(request.user, "student"):
                res["student"] = StudentSerializer(request.user.student).data
            if hasattr(request.user, "educator"):
                res["educator"] = EducatorCreatorSerializer(request.user.educator).data
        except Exception as e:
            print(e)
            pass
        return Response(res)


class CreateUserView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    def get_serializer(self, *args, **kwargs):
        return super().get_serializer(*args, **kwargs)


class CourseListCreate(ListCreateAPIView):
    serializer_class = CourseSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        educator = Educator.objects.get(user=self.request.user)
        return Course.objects.all().filter(educator=educator)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(educator=self.request.user)
        else:
            print(serializer.errors)


class CourseDelete(DestroyAPIView):
    serializer_class = CourseSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Course.objects.all(educator=self.request.user)


class CourseList(ListAPIView):
    serializer_class = CourseSerializer
    permission_classes = [AllowAny]
    queryset = Course.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()
        title = self.request.query_params.get("title", None)
        if title is not None:
            queryset = queryset.filter(title__icontains=title)
        return queryset
