from django.contrib import admin
from import_export.admin import ExportActionMixin
from . models import User

class UserAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ['user_id', 'name', 'role']
    list_filter = ['role']   
    search_fields = ['name', 'user_id']

admin.site.register(User, UserAdmin)

admin.site.site_header = "PG-DMS: AYUSH Portal"
admin.site.index_title = "AYUSH Portal"
admin.site.site_title = "Admin"