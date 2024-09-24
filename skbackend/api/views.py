from django.contrib.auth.models import User
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.generics import (
    CreateAPIView,
    DestroyAPIView,
    ListAPIView,
    ListCreateAPIView,
)
from rest_framework.permissions import AllowAny, IsAuthenticated

from .models import Course, Educator, Student
from .serializers import (
    CouresSerializer,
    EducatorSerializer,
    StudentSerializer,
    UserSerializer,
)
from .utils import send_email_to_client


@api_view(["GET", "POST", "PUT", "DELETE"])
def student(request):
    pass
    # return crud_omnifunc(Student, StudentSerializer, request)
    # if request.method == "GET":
    #     students = Student.objects.get()
    #     serialized_students = StudentSerializer(students)
    #     return Response(serialized_students.data)
    # elif request.method == "POST":
    #     serialized = StudentSerializer(data=request.data)
    #     if serialized.is_valid():
    #         serialized.save()
    #         return Response(serialized.data, status=201)
    #     return Response(serialized.errors, status=400)


@api_view(["GET", "POST", "PUT", "DELETE"])
def student_by_pk(request, pk):
    pass
    # return crud_omnifunc(Student, StudentSerializer, request, pk)
    # if request.method == "GET":
    #     student = Student.objects.get(pk=pk)
    #     serialized = StudentSerializer(student)
    #     return Response(serialized.data)


@api_view(["GET", "POST", "PUT", "DELETE"])
def course(request):
    pass
    # return crud_omnifunc(Course, CouresSerializer, request)
    # if request.method == "GET":
    #     courses = Course.objects.get()
    #     seri_courses = CouresSerializer(courses)
    #     return Response(seri_courses.data)
    # elif request.method == "POST":
    #     seri_course = CouresSerializer(data=request.data)
    #     if seri_course.is_valid():
    #         seri_course.save()
    #         return Response(seri_course.data, status=201)
    #     return Response(seri_course.errors, status=400)


@api_view(["GET", "POST", "PUT", "DELETE"])
def course_by_pk(request, pk):
    pass
    # return crud_omnifunc(Course, CouresSerializer, request, pk)
    # if request.method == "GET":
    #     courses = Course.objects.get(pk=pk)
    #     seri_course = CouresSerializer(courses)
    #     return Response(seri_course.data)
    # elif request.method == "POST":
    #     seri_course = CouresSerializer(data=request.data)
    #     if seri_course.is_valid():
    #         seri_course.save()
    #         return Response(seri_course.data, status=201)
    #     return Response(seri_course.errors, status=400)


@api_view(["GET", "POST", "PUT", "DELETE"])
def educator(request):
    pass
    # return crud_omnifunc(Educator, EducatorSerializer, request)


@api_view(["GET", "POST", "PUT", "DELETE"])
def educator_by_pk(request, pk):
    pass
    # return crud_omnifunc(Educator, EducatorSerializer, request, pk)


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


class CreateUserView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_serializer(self, *args, **kwargs):
        # Ensure that context is passed correctly
        kwargs["context"] = self.get_serializer_context()
        return super().get_serializer(*args, **kwargs)


class CourseListCreate(ListCreateAPIView):
    serializer_class = CouresSerializer
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
    serializer_class = CouresSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Course.objects.all(educator=self.request.user)


class CourseList(ListAPIView):
    serializer_class = CouresSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Course.objects.all()
