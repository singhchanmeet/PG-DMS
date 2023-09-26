from django.contrib import admin
from .models import Dissertation

class DissertationAdmin(admin.ModelAdmin):
    list_display = ['article_id', 'author_name', 'title', 'approved_by_university', 'published']
    list_filter = ['approved_by_guide', 'approved_by_university', 'published']

admin.site.register(Dissertation, DissertationAdmin)