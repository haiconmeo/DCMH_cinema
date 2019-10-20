from rest_framework import serializers
from cinema.models import Phim,Anh,AnhDichVu,AnhPhim,BookVe,DichVu,Rap,Ve
from django.contrib.auth.models import User
class PhimSerializer(serializers.ModelSerializer):
    class Meta:
        model = Phim
        fields  = '__all__'
class AnhSerializer(serializers.ModelSerializer):
    class Meta:
        model = Anh
        fields = '__all__'
class AnhDichVuSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnhDichVu
        fields = '__all__'
class AnhPhimSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnhPhim
        fields = '__all__'
class BookVeSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookVe
        fields = '__all__'
class DichVuSerializer(serializers.ModelSerializer):
    class Meta:
        model = DichVu
        fields = '__all__'
class RapSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rap
        fields = '__all__'
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','password']
class VeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ve
        fields = '__all__'