from rest_framework import serializers
from cinema.models import Phim,Anh,BookVe,DichVu,Rap,Ve
from django.contrib.auth.models import User


# class AnhSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Anh
#         fields = '__all__'
# class AnhDichVuSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = AnhDichVu
#         fields = '__all__'
# class AnhPhimSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = AnhPhim
#         fields = '__all__'
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
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','password']
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
