from django.db import models
from django.contrib.auth.models import User # de lay user
# from django.contrib.postgres.fields import ArrayField
class Anh(models.Model):
    anh_link = models.CharField(max_length=50)   
    def __str__(self):
        return self.anh_link
    
# dich vu
class Phim(models.Model):
    phim_ten = models.CharField(max_length=50)
    phim_nuocphathanh=models.CharField(max_length=50)
    phim_theloai = models.CharField(max_length=50)
    phim_ngayphathanh = models.DateField(auto_now=False, auto_now_add=False)
    phim_trangthai = models.CharField(max_length=50)
    # phim_trailer = models.FilePathField( path="/video")
    phim_trailer=models.CharField(max_length=50)
    phim_thongtin = models.TextField()
    anhphim =models.ManyToManyField(Anh, related_name="phim_anh", blank=True)
    def __str__(self):
        return self.phim_ten
    

class Rap(models.Model):
    rap_ten = models.CharField(max_length=50)
    rap_thongtin =models.TextField()
    rap_diachi =models.TextField()
    anhs =models.ManyToManyField(Anh, related_name="rap_list", blank=True)
    phims=models.ManyToManyField(Phim, related_name="phims", blank=True)
    def __str__(self):
        return self.rap_ten
    
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

# class Rap_phim_list(models.Model):
#     rap_phim_rap= models.ForeignKey(Rap,on_delete=models.Case, related_name='rap_phim_rap')
#     rap_phim_phim=models.ForeignKey(Phim,on_delete=models.CASCADE, related_name='rap_phim_phim',)
#     rap_phim_gio_chieu = models.TextField(blank=True)
#     def set_list(self, element):
#         if self.rap_phim_gio_chieu:
#             self.rap_phim_gio_chieu = self.rap_phim_gio_chieu + "," + element
#         else:
#             self.rap_phim_gio_chieu = element

#     def get_list(self):
#         if self.rap_phim_gio_chieu:
#             return self.rap_phim_gio_chieu.split(",")
#         else:
#             None
    

