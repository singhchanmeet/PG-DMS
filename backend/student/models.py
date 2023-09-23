# student/models.py

from django.db import models
from authentication.models import User
from guide.models import Guide  # Import the Guide model from the 'guide' app
from university.models import University  # Import the Student model from the 'student' app

class Student(models.Model):
    id = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    number_of_dissertations = models.PositiveIntegerField(default=0)
    guide = models.ForeignKey(Guide, on_delete=models.SET_NULL, null=True)
    university = models.ForeignKey(University, on_delete=models.SET_NULL, null=True)
    
    def __str__(self):
        return self.user.name  # You can use the User's name as the student's name

    class Meta:
        db_table = 'students'
        verbose_name_plural = 'students'
