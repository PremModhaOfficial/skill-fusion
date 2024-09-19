from django.contrib import admin

from .models import Course, Educator, Student, StudentProgress

# Register your models here.
admin.site.register(Course)
admin.site.register(Educator)
admin.site.register(Student)
admin.site.register(StudentProgress)
