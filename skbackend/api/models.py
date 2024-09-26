import os

from django.contrib.auth.models import User
from django.db import models

# Create your models here.
# profile pic


class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_pic = models.ImageField(upload_to="profile_pics/", blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = models.Manager()

    def __str__(self):
        return f"Student: {self.user}"


class Educator(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_pic = models.ImageField(upload_to="profile_pics/", blank=True, null=True)
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=13)
    date_of_birth = models.CharField(max_length=10, null=True, blank=True)
    location = models.CharField(max_length=255)
    social_links = models.TextField(null=True, blank=True)
    experiance = models.FloatField(choices=[(i + 0.5, i + 0.5) for i in range(11)])

    objects = models.Manager()

    def __str__(self):
        return f"Educator: {self.user}"


""" title: "Drone Building",
    instructor: "Dinesh Sain",
    rating: 5,
    numRatings: 2,
    verified: true,
    classes: 7,
    price: 750,
    image: DB,
 """


def get_image_path(instance, filename):
    return os.path.join("course_images", str(instance.pk), filename)


class Course(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    educator = models.ForeignKey(Educator, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    varified = models.BooleanField(False)
    price = models.FloatField()
    image = models.ImageField(upload_to=get_image_path, blank=True, null=True)
    classes = models.IntegerField()

    objects = models.Manager()

    def __str__(self):
        return f"Course: {self.title}"


class StudentProgress(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    progress = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = models.Manager()

    def update_progress(self, progress):
        self.progress = progress
        self.save()

    def __str__(self):
        return f"Student: {self.student} - Course: {self.course}"
