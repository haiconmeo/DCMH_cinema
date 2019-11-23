from rest_framework import serializers
from cinema.models import Phim,BookVe,DichVu,Rap,Profile
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from drf_extra_fields.fields import Base64ImageField,Base64FileField
import base64
from io import StringIO
class BookVeSerializer(serializers.ModelSerializer):
  class Meta:
    model = BookVe
    fields = '__all__'

class DichVuSerializer(serializers.ModelSerializer):
  # dichvu_anh = serializers.PrimaryKeyRelatedField(queryset=Anh.objects.all(), many=True)
  class Meta:
    model = DichVu
    fields = '__all__'

# class AnhSerializer(serializers.ModelSerializer):   
#   class Meta:
#     model = Anh
#     fields  = '__all__'
class FileField(Base64FileField):
    ALLOWED_TYPES = ('mp4')

    def get_file_extension(self, filename, decoded_file):
        print (filename)
        return 'mp4'
class PhimSerializer(serializers.ModelSerializer):
  # anhphim = AnhSerializer(many=True,read_only=True)
  phim_trailer = FileField()
  anhphim =  Base64ImageField()
  class Meta:      
    model = Phim     
    fields  ='__all__'
class Rap2Serializer(serializers.ModelSerializer): 
  phims= serializers.PrimaryKeyRelatedField(queryset=Phim.objects.all(), many=True)
  class Meta:
    model = Rap
    fields = '__all__'
class RapSerializer(serializers.ModelSerializer): 
  phims= PhimSerializer(many=True, read_only=True)
  class Meta:
    model = Rap
    fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'username', 'email','is_superuser')


class RegisterSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'username', 'email', 'password')
    extra_kwargs = {'password': {'write_only': True}}

  def create(self, validated_data):
    user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])
    profile =  Profile.objects.create(user=user,id=user.id)
    return user
class LoginAdminSerializer(serializers.Serializer):
  username = serializers.CharField()
  password = serializers.CharField()

  def validate(self, data):
    user = authenticate(**data)
    
    if user and user.is_active and  user.is_superuser:
      return user
    raise serializers.ValidationError("Incorrect Credentials")

class LoginSerializer(serializers.Serializer):
  username = serializers.CharField()
  password = serializers.CharField()

  def validate(self, data):
    user = authenticate(**data)
    if user and user.is_active:
      return user
    raise serializers.ValidationError("Incorrect Credentials")
class profileSerializer(serializers.ModelSerializer):
  user=UserSerializer( read_only=True)
  class Meta:
    model= Profile
    fields = '__all__'

class ChangePasswordSerializer(serializers.Serializer):
  old_password = serializers.CharField(required=True)
  new_password = serializers.CharField(required=True)