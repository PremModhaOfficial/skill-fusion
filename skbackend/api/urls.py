from django.urls import include, path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from .views import CourseDelete, CourseList, CourseListCreate, CreateStudentView

urlpatterns = [
    path("auth", include("rest_framework.urls")),
    # path("email/", send_email, name="send_email"),
    path("student/register", CreateStudentView.as_view(), name="student_register"),
    path("token/", TokenObtainPairView.as_view(), name="get_token"),
    path("token/refresh", TokenRefreshView.as_view(), name="refresh_token"),
    # path("student/", student, name="student"),
    # path("student/<int:pk>", student_by_pk, name="student_by_pk"),
    path("course/", CourseListCreate.as_view(), name="course"),
    path("courses/", CourseList.as_view(), name="course"),
    path("course_delete/<int:pk>", CourseDelete.as_view(), name="course_delete"),
    # path("educator/", educator, name="educator"),
    # path("educator/<int:pk>", educator_by_pk, name="educator_by_pk"),
]
