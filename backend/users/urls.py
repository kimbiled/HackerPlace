from django.urls import path
from .views import UserCreate, UserProfile

urlpatterns = [
    path('register/', UserCreate.as_view(), name='register'),
    path('profile/', UserProfile.as_view(), name='user_profile'),
]
