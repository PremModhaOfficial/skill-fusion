from api.models import Student
from django.core.mail import send_mail
from django.conf import settings

def send_email_to_client():
  subject = "OTP for Verification Email id"
  OTP = random. randint(1000, 9999)
  
  if request.method == "PUT":
    students = Student.objects.get()
    name = students.name
    email = students.email
  
  message = f"Dear {name}, OTP for email verification is {OTP}"
  from_email = settings.EMAIL_HOST_USER
  recipient = email
  
  send_mail()
