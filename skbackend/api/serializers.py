from rest_framework import serializers

from .models import Course, Educator, Student


class CouresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = "__all__"
        extra_kwargs = {"educator": {"read_only": True}}


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = "__all__"
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        student = Student.objects.create_user(**validated_data)
        return student


class EducatorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Educator
        fields = "__all__"
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        educator = Educator.objects.create_user(**validated_data)
        return educator
