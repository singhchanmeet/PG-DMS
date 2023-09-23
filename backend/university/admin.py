from django.contrib import admin
from . models import University

class UniversityAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'number_of_students','number_of_guides','number_of_dissertations',]

admin.site.register(University, UniversityAdmin)
# Register your models here.
