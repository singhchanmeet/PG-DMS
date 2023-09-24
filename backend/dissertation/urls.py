from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.CreateDissertation.as_view(), name='create_dissertation'),
    path('get-all/', views.GetDissertations.as_view(), name='get_dissertations'),
    path('get/', views.GetUserDissertations.as_view(), name='get_user_dissertations'),
    path('get/<int:id>/', views.GetDissertationDetails.as_view(), name='get_dissertation_details'),
    path('delete/<int:pk>/', views.DeleteDissertation.as_view(), name='delete_dissertation'),
]