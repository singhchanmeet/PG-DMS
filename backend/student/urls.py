from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.CreateStudent.as_view(), name='create_student'),
]