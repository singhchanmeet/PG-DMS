from django.contrib import admin
from . models import User

class UserAdmin(admin.ModelAdmin):
    list_display = ['user_id', 'name']

admin.site.register(User, UserAdmin)