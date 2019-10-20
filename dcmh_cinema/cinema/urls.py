from django.urls import path
from . import views
from django.contrib.auth.models import User # de lay user

urlpatterns = [
    path('ciname/rap/', views.RapListCreate.as_view()),
    path('cinema/user',views.UserListCreate.as_view()),
]