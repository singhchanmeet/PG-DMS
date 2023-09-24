from django.db import models
from authentication.models import User
from guide.models import Guide 
from university.models import University 



class Student(models.Model):
    id = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    name = models.CharField(max_length=100)
    guide = models.ForeignKey(Guide, on_delete=models.SET_NULL, null=True, blank=True)
    university = models.ForeignKey(University, on_delete=models.SET_NULL, null=True, blank=True)
    number_of_dissertations = models.PositiveIntegerField(default=0)
    
    def __str__(self):
        return self.name  

    class Meta:
        db_table = 'students'
        verbose_name_plural = 'students'




# Note: a circular import error can occur if we import Student in University models.py and University in Student models.py
# also Note: a circular import error WILL NOT occur if we import Student model in University views.py and University model in Student views.py

# this is because at the time our django project is run for the very first time, 
# the models get created and can have issues , however the views are accessed only when a request is made to to backend
# so a view can have circular imports
# similarly a serializer can also have circular imports

# Now Note: to avoid circular imports in models, simply use quotes '' while refering to another app's model, instead of importing that app's model
# this is known as lazy loading!