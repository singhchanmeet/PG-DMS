from django.db import models
from authentication.models import User
from university.models import University  # Import the University model from the 'university' app

class Guide(models.Model):
    id = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    name = models.CharField(max_length=100)
    university = models.ForeignKey(University, on_delete=models.SET_NULL, null=True, blank=True)
    number_of_students = models.PositiveIntegerField(default=0)
    
    def __str__(self):
        return self.name

    class Meta:
        db_table = 'guides'
        verbose_name_plural = 'guides'