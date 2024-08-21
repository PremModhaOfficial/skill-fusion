from django.urls import include, path

from .views import course, course_by_pk, student, student_by_pk

urlpatterns = [
    path("auth", include("rest_framework.urls")),
    path("student/", student, name="student"),
    path("student/<int:pk>", student_by_pk, name="student_by_pk"),
    path("course/", course, name="course"),
    path("course/<int:pk>", course_by_pk, name="course_by_pk"),
]
