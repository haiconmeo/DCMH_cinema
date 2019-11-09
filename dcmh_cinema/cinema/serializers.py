from rest_framework import serializers
from cinema.models import Phim,Anh,BookVe,DichVu,Rap,Ve,Rap_phim_list
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ['id','username','password']
# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ('id', 'username')
class BookVeSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookVe
        fields = '__all__'
class DichVuSerializer(serializers.ModelSerializer):
    dichvu_anh = serializers.PrimaryKeyRelatedField(queryset=Anh.objects.all(), many=True)
    class Meta:
        model = DichVu
        fields = '__all__'
class RapSerializer(serializers.ModelSerializer):
    # image_rap = serializers.RelatedField(source='AnhRap', read_only=True)
    anhs = serializers.PrimaryKeyRelatedField(queryset=Anh.objects.all(), many=True)
    class Meta:
        model = Rap
        fields = ('id','rap_ten','rap_thongtin','anhs')

class VeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ve
        fields = '__all__'
# class AnhRapSerializer(serializers.ModelSerializer):
    
#     class Meta:
#         model = AnhRap
#         fields = '__all__'
class PhimSerializer(serializers.ModelSerializer):
    anhphim = serializers.PrimaryKeyRelatedField(queryset=Anh.objects.all(), many=True)
    class Meta:
        model = Phim
        fields  = '__all__'
class AnhSerializer(serializers.ModelSerializer):
    Rap_list = RapSerializer(many=True, read_only=True)
    Phim_list = PhimSerializer(many=True,read_only=True)
    Dichvu_list = DichVuSerializer(many=True,read_only=True)
    class Meta:
        model = Anh
        fields  = ('id', 'anh_link','Rap_list','Phim_list','Dichvu_list')


class Rap_phim_listSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Rap_phim_list
        fields  = '__all__'



    #------------------
from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

# User Serializer
class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'username', 'email','password')

# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'username', 'email', 'password')
    extra_kwargs = {'password': {'write_only': True}}

  def create(self, validated_data):
    user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])

    return user

# Login Serializer
class LoginSerializer(serializers.Serializer):
  username = serializers.CharField()
  password = serializers.CharField()

  def validate(self, data):
    user = authenticate(**data)
    if user and user.is_active:
      return user
    raise serializers.ValidationError("Incorrect Credentials")