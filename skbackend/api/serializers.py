from django.contrib.auth.models import User
from django.contrib.auth.password_validation import ValidationError, validate_password
from rest_framework import serializers

from .models import Course, Educator, Student


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = "__all__"
        extra_kwargs = {"password": {"write_only": True}}


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data["username"], email=validated_data["email"]
        )
        try:
            validate_password(validated_data["password"], user)
            user.set_password(validated_data["password"])
            user.save()
        except ValidationError as e:
            user.delete()
            raise serializers.ValidationError({"password": e})
        return user


# class EducatorSerializer(serializers.ModelSerializer):
#     user = UserSerializer()
#
#     class Meta:
#         model = Educator
#         fields = "__all__"
#
class EducatorSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Educator
        fields = ["id", "user", "profile_pic"]
        extra_kwargs = {"password": {"write_only": True}}


class CourseSerializer(serializers.ModelSerializer):
    educator = EducatorSerializer(read_only=True)
    image = serializers.SerializerMethodField()

    def get_image(self, obj):
        if obj.image:
            return self.context["request"].build_absolute_uri(obj.image.url)
        return None

    class Meta:
        model = Course
        fields = [
            "id",
            "title",
            "description",
            "educator",
            "created_at",
            "updated_at",
            "varified",
            "price",
            "image",
            "classes",
        ]
        extra_kwargs = {"educator": {"read_only": True}}
