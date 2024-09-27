from django.urls import include, path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from .views import (
    CourseDelete,
    CourseList,
    CourseListCreate,
    CreateStudentView,
    CreateUserView,
    EducatorCreateView,
    EducatorListView,
    Whoami,
    payment,
    update_studentProgress,
)

urlpatterns = [
    path("auth", include("rest_framework.urls")),
    # path("email/", send_email, name="send_email"),
    path("payment/", payment, name="payment"),
    path("student/register", CreateStudentView.as_view(), name="student_register"),
    path(
        "student/made-progress/", update_studentProgress, name="student_made_progress"
    ),
    path("token/", TokenObtainPairView.as_view(), name="get_token"),
    path("token/refresh", TokenRefreshView.as_view(), name="refresh_token"),
    path("whoami/", Whoami.as_view(), name="whoami"),
    # path("student/", student, name="student"),
    path("register/", CreateUserView.as_view(), name="register"),
    path("mycourse/", CourseListCreate.as_view(), name="course"),
    path("courses/", CourseList.as_view(), name="courses"),
    path("course_delete/<int:pk>", CourseDelete.as_view(), name="course_delete"),
    path("educator/", EducatorCreateView.as_view(), name="educator"),
    path("educators/", EducatorListView.as_view(), name="educator"),
]
