from django.contrib.auth.models import User
from django.db import models

# Create your models here.


# TODO : courses with status and recommendations
class Student(User):
    phone = models.CharField(max_length=15)
    address = models.TextField()

    def __str__(self):
        return f"Student :: {self.first_name} {self.last_name}"


class Educator(User):
    phone = models.CharField(max_length=15)
    address = models.TextField()

    def __str__(self):
        return f"Educator :: {self.first_name} {self.last_name}"


class Course(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    educator = models.ForeignKey(
        Educator, on_delete=models.CASCADE, related_name="educator"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.title}"


class Rating(models.Model):
    student = models.ForeignKey(
        Student, on_delete=models.CASCADE, related_name="ratings"
    )
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="rating")
    rating = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.rating}"


class Progress(models.Model):
    student = models.ForeignKey(
        Student, on_delete=models.CASCADE, related_name="student"
    )
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="course")
    progress = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.progress}%"
