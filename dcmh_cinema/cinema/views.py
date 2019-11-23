from django.shortcuts import render
from django.contrib.auth.models import User # de lay user
from rest_framework.response import Response
# Create your views here.
from cinema.models import BookVe,DichVu,Phim,Rap,Profile
from rest_framework import generics
from cinema.serializers import BookVeSerializer,DichVuSerializer,PhimSerializer,Rap2Serializer,RapSerializer,UserSerializer,profileSerializer
from rest_framework.decorators import api_view
from rest_framework import status
from  .pagination import CustomPagination

from rest_framework import pagination
from rest_framework.response import Response

from rest_framework import generics
import base64
import os
from django.core.files import File 


@api_view(['GET', 'POST'])
def rap_list(request):
    """
    List all Raps, or create a new Rap.
    """
    if request.method == 'GET':
        Raps = Rap.objects.all()
        serializer = RapSerializer(Raps,context={'request': request} ,many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = RapSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET', 'PUT', 'DELETE'])
def Rap_detail(request, pk):
    """
    Retrieve, update or delete a Rap instance.
    """
    try:
        rap = Rap.objects.get(pk=pk)
    except rap.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = RapSerializer(rap,context={'request': request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = RapSerializer(rap, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        rap.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
@api_view(['GET', 'POST'])
def Phim_list(request):
    """
    List all Raps, or create a new Rap.
    """
    if request.method == 'GET':
        Phims = Phim.objects.all()
        serializer = PhimSerializer(Phims,context={'request': request} ,many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        
        serializer = PhimSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET', 'PUT', 'DELETE'])
def Phim_detail(request, pk):
    """
    Retrieve, update or delete a Rap instance.
    """
    try:
        phim = Phim.objects.get(pk=pk)
    except phim.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = PhimSerializer(phim,context={'request': request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = PhimSerializer(phim, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        
        phim.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
@api_view(['GET', 'POST'])
def Dichvu_list(request):
    """
    List all Raps, or create a new Rap.
    """
    if request.method == 'GET':
        Dichvus = DichVu.objects.all()
        serializer = DichVuSerializer(Dichvus,context={'request': request} ,many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = DichVuSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET', 'PUT', 'DELETE'])
def Dichvu_detail(request, pk):
    """
    Retrieve, update or delete a Rap instance.
    """
    try:
        dv = DichVu.objects.get(pk=pk)
    except dv.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = DichVuSerializer(dv,context={'request': request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = DichVuSerializer(dv, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        dv.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
@api_view(['GET', 'POST'])
def User_list(request):
    """
    List all Raps, or create a new Rap.
    """
    if request.method == 'GET':
        Users = User.objects.all()
        pagination_class = CustomPagination
        serializer = UserSerializer(Users,context={'request': request} ,many=True)
        
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET', 'PUT', 'DELETE'])
def User_detail(request, pk):
    """
    Retrieve, update or delete a Rap instance.
    """
    try:
        us = User.objects.get(pk=pk)
    except us.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = UserSerializer(us,context={'request': request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = UserSerializer(us, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        us.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def profile_list(request):
    """
    List all Raps, or create a new Rap.
    """
    if request.method == 'GET':
        Profiles = Profile.objects.all()
        serializer = profileSerializer(Profiles,context={'request': request} ,many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = profileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET', 'PUT', 'DELETE'])
def profile_detail(request, pk):
    """
    Retrieve, update or delete a Rap instance.
    """
    try:
        profile = Profile.objects.get(pk=pk)
    except profile.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = profileSerializer(profile,context={'request': request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        print (request.data)
        serializer = profileSerializer(profile, data=request.data,context={'request': request})
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        profile.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


#---------------
@api_view(['GET', 'POST'])
def rap_list2(request):
    """
    List all Raps, or create a new Rap.
    """
    if request.method == 'GET':
        Raps = Rap.objects.all()
        serializer = Rap2Serializer(Raps,context={'request': request} ,many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = Rap2Serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET', 'PUT', 'DELETE'])
def Rap_detail2(request, pk):
    """
    Retrieve, update or delete a Rap instance.
    """
    try:
        rap = Rap.objects.get(pk=pk)
    except rap.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = Rap2Serializer(rap,context={'request': request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = Rap2Serializer(rap, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        rap.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)