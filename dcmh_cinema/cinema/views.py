from django.shortcuts import render
from django.contrib.auth.models import User # de lay user

# Create your views here.
from cinema.models import Anh,AnhDichVu,AnhPhim,BookVe,DichVu,Phim,Rap,Ve
from rest_framework import generics
from cinema.serializers import AnhDichVuSerializer,AnhPhimSerializer,AnhSerializer,BookVeSerializer,DichVuSerializer,PhimSerializer,RapSerializer,UserSerializer,VeSerializer

class PhimListCreate(generics.CreateAPIView):
    queryset = Phim.objects.all()
    serializer_class = PhimSerializer
class RapListCreate(generics.CreateAPIView):
    queryset = Rap.objects.all()
    serializer_class = RapSerializer    
class UserListCreate(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer    
