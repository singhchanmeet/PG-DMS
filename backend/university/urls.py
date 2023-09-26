from django.urls import path
from . import views

urlpatterns = [
    path('all-students/', views.GetAllStudents.as_view(), name='get_all_students'),
    path('all-guides/', views.GetAllGuides.as_view(), name='get_all_guides'),
    path('create/', views.CreateUniversity.as_view(), name='create_university'),
]