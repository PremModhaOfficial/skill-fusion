from django.contrib.auth.models import User
from rest_framework import serializers

from .models import Course, Educator, Student


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ["username", "email", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User(**validated_data)
        user.set_password(validated_data["password"])  # Hash the password
        user.save()
        return user


class CouresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = "__all__"
        extra_kwargs = {"educator": {"read_only": True}}


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = "__all__"
        # extra_kwargs = {"password": {"write_only": True}}


class EducatorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Educator
        fields = "__all__"
        # extra_kwargs = {"password": {"write_only": True}}
