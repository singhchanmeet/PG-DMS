from django.db import models
from authentication.models import User

class University(models.Model):
    id = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    name = models.CharField(max_length=100)
    number_of_students = models.PositiveIntegerField(default=0)
    number_of_guides = models.PositiveIntegerField(default=0)
    number_of_dissertations = models.PositiveIntegerField(default=0)
    max_stud_guide_ratio = models.PositiveIntegerField(default=10)
    
    def __str__(self):
        return self.name

    class Meta:
        db_table = 'universities'
        verbose_name_plural = 'universities'
