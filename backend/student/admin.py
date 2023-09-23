from django.contrib import admin
from . models import Student

class StudentAdmin(admin.ModelAdmin):
    list_display = ['id', 'guide', 'university', 'number_of_dissertations',]

admin.site.register(Student, StudentAdmin)
# Register your models here.
