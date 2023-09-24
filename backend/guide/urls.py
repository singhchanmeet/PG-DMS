from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.CreateGuide.as_view(), name='create_guide'),
]