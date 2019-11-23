from django.db import models
from django.contrib.auth.models import User 

# class Anh(models.Model):       
#     anh_link = models.ImageField(upload_to='img/') 
    

class Phim(models.Model):
    phim_ten = models.CharField(max_length=50)
    phim_nuocphathanh=models.CharField(max_length=50)
    phim_theloai = models.CharField(max_length=50)
    phim_ngayphathanh = models.DateField(auto_now=False, auto_now_add=False)
    phim_trangthai = models.CharField(max_length=50)
    phim_trailer = models.FileField( upload_to="video/")    
    phim_thongtin = models.TextField()
    anhphim = models.FileField(upload_to='img/' ) 
    rate =  models.IntegerField()
    thoiluong = models.IntegerField()
    
   
    

class Rap(models.Model):
    rap_ten = models.CharField(max_length=50)
    rap_thongtin =models.TextField()
    rap_diachi =models.TextField()
    phims=models.ManyToManyField(Phim, related_name="phims", blank=True)
    
    
class DichVu(models.Model):
    dichVu_ten = models.CharField(max_length=50) 
    dichVu_gia = models.DecimalField(max_digits=9, decimal_places=2)
    dichvu_anh =models.ImageField(upload_to='img/') 
#ve


class BookVe(models.Model):
    Phims = models.ForeignKey(Phim, on_delete=models.CASCADE)
    bookve_user = models.ForeignKey(User, on_delete=models.CASCADE)
    bookve_soluong =models.IntegerField()
    date= models.DateTimeField(  auto_now_add=True)



class Profile(models.Model):
    id = models.IntegerField(primary_key=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phonenum = models.CharField(max_length=30, blank=True)
    address = models.CharField(max_length=30, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    cmmd = models.CharField(max_length=30, blank=True)