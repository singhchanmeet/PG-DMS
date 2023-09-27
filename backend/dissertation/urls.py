from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.CreateDissertation.as_view(), name='create_dissertation'),
    path('get-all/', views.GetDissertations.as_view(), name='get_dissertations'),
    path('get/', views.GetUserDissertations.as_view(), name='get_user_dissertations'),
    path('get/<int:id>/', views.GetDissertationDetails.as_view(), name='get_dissertation_details'),
    path('delete/<int:pk>/', views.DeleteDissertation.as_view(), name='delete_dissertation'),
    path('feedback/', views.GiveFeedback.as_view(), name='give_feedback'),
    path('approve/', views.GiveApproval.as_view(), name='give_approval'),
    path('pending-approvals/', views.PendingApprovals.as_view(), name='pending_approvals'),
    path('completed-approvals/', views.CompletedApprovals.as_view(), name='completed_approvals'),
    path('pending-publications/', views.PendingPublications.as_view(), name='pending_publications'),
    path('completed-publications/', views.CompletedPublications.as_view(), name='completed_publications'),
    path('all-completed-publications/', views.AllCompletedPublications.as_view(), name='all_completed_publications'),
    path('category-filter/', views.CategoryFilter.as_view(), name='category_filter'),
    path('medical-system-filter/', views.MedicalSystemFilter.as_view(), name='medical_system_filter'),
    path('search-keyword/', views.KeywordSearch.as_view(), name='search_keyword'),
    path('search-title/', views.TitleSearch.as_view(), name='search_title'),    
    path('plag-check/', views.PlagCheck.as_view(), name='plag_check'),    

]