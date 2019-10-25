from django.shortcuts import render
from django.contrib.auth.models import User # de lay user
from rest_framework.response import Response
# Create your views here.
from cinema.models import Anh,BookVe,DichVu,Phim,Rap,Ve
from rest_framework import generics
from cinema.serializers import AnhSerializer,BookVeSerializer,DichVuSerializer,PhimSerializer,RapSerializer,UserSerializer,VeSerializer
from rest_framework.decorators import api_view
from rest_framework import status

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