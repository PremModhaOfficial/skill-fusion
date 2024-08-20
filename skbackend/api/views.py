from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import CouresSerializer, Course, Student, StudentSerializer


@api_view(["GET"])
def get_student(request):
    stds = Student.objects.get()
    seri = StudentSerializer(stds)
    return Response(seri.data)


@api_view(["GET"])
def get_student_by_pk(request, pk):
    stds = Student.objects.get(pk=pk)
    seri = StudentSerializer(stds)
    return Response(seri.data)


@api_view(["GET"])
def get_course(request):
    courses = Course.objects.get()
    seri_courses = CouresSerializer(courses)
    return Response(seri_courses.data)


@api_view(["GET"])
def get_course_by_pk(request, pk):
    courses = Course.objects.get(pk=pk)
    seri_course = CouresSerializer(courses)
    return Response(seri_course.data)
