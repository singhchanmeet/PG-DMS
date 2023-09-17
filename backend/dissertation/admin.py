from django.contrib import admin
from .models import Dissertation

class DissertationAdmin(admin.ModelAdmin):
    list_display = ['article_id', 'author_name', 'title']

admin.site.register(Dissertation, DissertationAdmin)