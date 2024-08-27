from rest_framework.decorators import api_view
from django.shortcuts import render,redirect
from .utils import send_email_to_client
from django.http import HttpResponse

from .models import (
    CouresSerializer,
    Course,
    Educator,
    EducatorSerializer,
    Student,
    StudentSerializer,
)
from .myhelpers import crud_omnifunc


@api_view(["GET", "POST", "PUT", "DELETE"])
def student(request):
    return crud_omnifunc(Student, StudentSerializer, request)
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
    return crud_omnifunc(Student, StudentSerializer, request, pk)
    # if request.method == "GET":
    #     student = Student.objects.get(pk=pk)
    #     serialized = StudentSerializer(student)
    #     return Response(serialized.data)


@api_view(["GET", "POST", "PUT", "DELETE"])
def course(request):
    return crud_omnifunc(Course, CouresSerializer, request)
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
    return crud_omnifunc(Course, CouresSerializer, request, pk)
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
    return crud_omnifunc(Educator, EducatorSerializer, request)


@api_view(["GET", "POST", "PUT", "DELETE"])
def educator_by_pk(request, pk):
    return crud_omnifunc(Educator, EducatorSerializer, request, pk)


def send_email(request):
    send_email_to_client()
    return redirect('/')
