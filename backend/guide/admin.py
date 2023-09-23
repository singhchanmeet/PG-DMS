from django.contrib import admin
from . models import Guide

class GuideAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'university', 'number_of_students',]

admin.site.register(Guide, GuideAdmin)
# Register your models here.
