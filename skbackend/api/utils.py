import random

from django.conf import settings
from django.contrib.auth.models import User
from django.core.mail import send_mail


def send_email_to_client(request, pk):
    subject = "OTP for Verification Email id"
    OTP = random.randint(1000, 9999)

    if request.method == "PUT":
        student = User.objects.get(pk=pk)
        email = student.email

        message = f"Dear {student.first_name}, OTP for email verification is {OTP}"
        from_email = settings.EMAIL_HOST_USER
        recipient = [email]

        send_mail(
            subject=subject,
            message=message,
            from_email=from_email,
            recipient_list=recipient,
        )
