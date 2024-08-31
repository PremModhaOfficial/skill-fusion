import random

from api.models import Student
from django.conf import settings
from django.core.mail import send_mail


def send_email_to_client(request, pk):
    subject = "OTP for Verification Email id"
    OTP = random.randint(1000, 9999)

    if request.method == "PUT":
        students = Student.objects.get(pk=pk)
        name = students.name
        email = students.email

    message = f"Dear {name}, OTP for email verification is {OTP}"
    from_email = settings.EMAIL_HOST_USER
    recipient = [email]

    send_mail(
        subject=subject,
        message=message,
        from_email=from_email,
        recipient_list=recipient,
    )
