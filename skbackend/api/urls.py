from django.urls import include, path

from .views import get_course, get_course_by_pk, get_student, get_student_by_pk

urlpatterns = [
    path("auth", include("rest_framework.urls")),
    path("student", get_student, name="get_student"),
    path("student/<int:pk>", get_student_by_pk, name="get_student_by_pk"),
    path("course", get_course, name="get_course"),
    path("course/<int:pk>", get_course_by_pk, name="get_course_by_pk"),
]
