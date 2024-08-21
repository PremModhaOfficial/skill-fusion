from typing import Type, TypeVar

from django.db import models
from rest_framework import serializers, status
from rest_framework.response import Response

django_model = TypeVar("django_model", bound=models.Model)
django_model_serializer = TypeVar(
    "django_model_serializer", bound=serializers.ModelSerializer
)


def crud_omnifunc(
    the_model: Type[django_model],
    the_model_seri: Type[django_model_serializer],
    request,
    pk=None,
):
    if request.method == "POST":
        db_data_ser = the_model_seri(data=request.data, many=True)
        if db_data_ser.is_valid():
            db_data_ser.save()
            return Response(db_data_ser.data, status=201)
        return Response(db_data_ser.errors, status=400)

    try:
        if pk:
            db_data = the_model.objects.get(pk=pk)
            db_data_ser = the_model_seri(db_data)
        else:
            db_data = the_model.objects.all()
            db_data_ser = the_model_seri(db_data, many=True)
    except the_model.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        return Response(db_data_ser.data)
    elif request.method == "PUT":
        db_data_ser = the_model_seri(db_data, data=request.data)
        if db_data_ser.is_valid():
            db_data_ser.save()
            return Response(db_data_ser.data)
        return Response(db_data_ser.errors, status=400)
    elif request.method == "DELETE":
        db_data.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
