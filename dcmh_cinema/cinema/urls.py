from django.urls import path
from . import views
from django.contrib.auth.models import User # de lay user
import re as r
urlpatterns = [
    path('ciname/rap/', views.rap_list),
    path('ciname/rap/<int:pk>', views.Rap_detail)
    # # path('cinema/user',views.UserListCreate.as_view()),
    # path('<int:pk>/', views.DetailRapList.as_view()),
]