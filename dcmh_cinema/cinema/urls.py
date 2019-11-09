from django.urls import path,include
from . import views
from django.contrib.auth.models import User # de lay user
import re as r
from .api import RegisterAPI, LoginAPI, UserAPI
urlpatterns = [
    path('rap/', views.rap_list),
    path('rap/<int:pk>', views.Rap_detail),
    path('phim/', views.Phim_list),
    path('phim/<int:pk>', views.Phim_detail),
    path('dichvu/', views.Dichvu_list),
    path('dichvu/<int:pk>', views.Dichvu_detail),
    path('user/', views.User_list),
    path('rap_phim_list',views.rap_phim_list),
    path('auth/register/', RegisterAPI.as_view()),
    path('auth/login/', LoginAPI.as_view()),
    path('auth/user/', UserAPI.as_view()),
    path('auth/', include('knox.urls')),
    # # path('cinema/user',views.UserListCreate.as_view()),
    # path('<int:pk>/', views.DetailRapList.as_view()),
]