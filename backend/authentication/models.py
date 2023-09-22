from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.utils.translation import gettext_lazy as _


# BaseUserManager class contains create_user and create_superuser methods
# We are inheriting from that to override them
class CustomUserManager(BaseUserManager):

    def create_user(self, user_id, email, password, **extra_fields):
        if not email:
            raise ValueError(_("The Email field must be set"))
        if not password:
            raise ValueError(_("User must have a password"))
        email = self.normalize_email(email)
        user = self.model(user_id=user_id, email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, user_id, email, password, **extra_fields):
        if not email:
            raise ValueError(_("User must have an email"))
        if not password:
            raise ValueError(_("User must have a password"))
        
        user = self.create_user(user_id=user_id,email=email, password=password, **extra_fields)

        user.is_staff = True
        user.is_superuser = True
        user.role = User.Role.SUPERUSER
        user.save(using=self._db)
        return user
    


class User(AbstractUser):

    class Role(models.TextChoices):
        SUPERUSER = "SUPERUSER" , 'Superuser'
        STUDENT = "STUDENT" , 'Student'
        GUIDE = "GUIDE" , 'Guide'
        UNIVERSITY = "UNIVERSITY" , 'University'

    user_id = models.CharField(max_length=50, primary_key=True)
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=50, choices=Role.choices)

    student = models.ForeignKey('student.Student', on_delete=models.SET_NULL, null=True, blank=True)
    guide = models.ForeignKey('guide.Guide', on_delete=models.SET_NULL, null=True, blank=True)
    university = models.ForeignKey('university.University', on_delete=models.SET_NULL, null=True, blank=True)

    # USERNAME_FIELD and REQUIRED_FIELDS remain the same

    def __str__(self):
        return self.user_id

    class Meta:
        db_table = 'users'
        verbose_name_plural = "Users"