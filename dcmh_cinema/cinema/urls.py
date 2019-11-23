from django.urls import path,include
from . import views
from django.contrib.auth.models import User # de lay user
import re as r
from .api import RegisterAPI, LoginAPI, UserAPI,ChangePasswordView,LoginAdminAPI
urlpatterns = [
    path('rap/', views.rap_list),
    path('rap/<int:pk>/', views.Rap_detail),
    path('rap2/', views.rap_list2),
    path('rap2/<int:pk>/', views.Rap_detail2),
    path('phim/', views.Phim_list),
    path('phim/<int:pk>/', views.Phim_detail),
    path('dichvu/', views.Dichvu_list),
    path('dichvu/<int:pk>/', views.Dichvu_detail),
    path('user/', views.User_list),
    path('user/<int:pk>/', views.User_detail), 
    
   
    path('auth/profile/',views.profile_list),
    path('auth/profile/<int:pk>/',views.profile_detail),
    path('auth/register/', RegisterAPI.as_view()),
    path('auth/login/', LoginAPI.as_view()),
    path('auth/loginadmin/',LoginAdminAPI.as_view()),
    path('auth/user/', UserAPI.as_view()),
    path('auth/reset',ChangePasswordView.as_view()),
    path('auth/', include('knox.urls')),
    
    
]