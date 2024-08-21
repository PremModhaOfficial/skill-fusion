from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import CouresSerializer, Course, Student, StudentSerializer


@api_view(["GET"])
def student(request):
    if request.method == "GET":
        students = Student.objects.get()
        serialized_students = StudentSerializer(students)
        return Response(serialized_students.data)


@api_view(["GET"])
def student_by_pk(request, pk):
    if request.method == "GET":
        student = Student.objects.get(pk=pk)
        serialized = StudentSerializer(student)
        return Response(serialized.data)


@api_view(["GET"])
def course(request):
    if request.method == "GET":
        courses = Course.objects.get()
        seri_courses = CouresSerializer(courses)
        return Response(seri_courses.data)


@api_view(["GET"])
def course_by_pk(request, pk):
    if request.method == "GET":
        courses = Course.objects.get(pk=pk)
        seri_course = CouresSerializer(courses)
        return Response(seri_course.data)
