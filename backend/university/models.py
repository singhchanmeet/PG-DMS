# university/models.py

from django.db import models
from authentication.models import User
from guide.models import Guide  # Import the Guide model from the 'guide' app
from student.models import Student  # Import the Student model from the 'student' app

class University(models.Model):
    id = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    name = models.CharField(max_length=100)
    number_of_students = models.PositiveIntegerField(default=0)
    number_of_guides = models.PositiveIntegerField(default=0)
    number_of_dissertations = models.PositiveIntegerField(default=0)
    
    def __str__(self):
        return self.name

    class Meta:
        db_table = 'universities'
