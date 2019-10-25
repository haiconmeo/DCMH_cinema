from django.db import models
from django.contrib.auth.models import User # de lay user
# rap.


#phim


# anh
class Anh(models.Model):
    anh_link = models.FilePathField(path="/img")   
# dich vu
class Phim(models.Model):
    phim_ten = models.CharField(max_length=50)
    phim_nuocphathanh=models.CharField(max_length=50)
    phim_theloai = models.CharField(max_length=50)
    phim_ngayphathanh = models.DateField(auto_now=False, auto_now_add=False)
    phim_trangthai = models.CharField(max_length=50)
    phim_trailer = models.FilePathField( path="/video")
    phim_thongtin = models.TextField()
    anhphim =models.ManyToManyField(Anh, related_name="phim_anh", blank=True)
class Rap(models.Model):
    rap_ten = models.CharField(max_length=50)
    rap_thongtin =models.TextField()
    rap_diachi =models.TextField()
    anhs =models.ManyToManyField(Anh, related_name="rap_list", blank=True)
class DichVu(models.Model):
    dichVu_ten = models.CharField(max_length=50) 
    dichVu_gia = models.DecimalField(max_digits=9, decimal_places=2)
    dichvu_anh =models.ManyToManyField(Anh, related_name="dichvu_anh", blank=True)
#ve
class Ve(models.Model):
    ve_phim = models.ForeignKey(Phim ,on_delete=models.CASCADE)
    ve_rap = models.ForeignKey(Rap,on_delete=models.CASCADE)
    ve_soluong = models.IntegerField()
    ve_giatien = models.DecimalField(max_digits=7, decimal_places=2)
    ve_ngaychieu = models.DateField(auto_now=False, auto_now_add=False)
# book ve

class BookVe(models.Model):
    bookve_ve = models.ForeignKey(Ve, on_delete=models.CASCADE)
    bookve_user = models.ForeignKey(User, on_delete=models.CASCADE)
    bookve_soluong =models.IntegerField()

# anh - phim

# class AnhPhim(models.Model):
#     anhPhim_phim =models.ForeignKey(Phim, on_delete=models.CASCADE)
#     anhPhim_anh = models.ForeignKey(Anh, on_delete=models.CASCADE)

# # anh - dichvu

# class AnhDichVu(models.Model):
#     anhDichVu_dichvu =models.ForeignKey(DichVu, on_delete=models.CASCADE)
#     anhDichVu_anh =  models.ForeignKey(Anh, on_delete = models.CASCADE)
# class AnhRap(models.Model):
#     anhRap_rap = models.ForeignKey(Rap, on_delete=models.CASCADE)
#     anhRap_anh = models.ForeignKey(Anh, on_delete=models.CASCADE)
    

