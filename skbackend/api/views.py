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

from .models import Course, Educator, Student, User
from .serializers import (
    CourseSerializer,
    EducatorSerializer,
    StudentSerializer,
    UserSerializer,
)
from .utils import send_email_to_client


@api_view(["PUT"])
def send_email(request):
    pk = request.data["pk"]
    send_email_to_client(request, pk=pk)
    return render(request, template_name="index.html")


class CreateStudentView(CreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    permission_classes = [IsAuthenticated]


class CreateEducatorView(CreateAPIView):
    queryset = Educator.objects.all()
    serializer_class = EducatorSerializer
    permission_classes = [IsAuthenticated]


class Whoami(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)


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
        educator = self.request.user
        return Course.objects.all(educator=educator)

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
