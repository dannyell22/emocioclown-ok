from django.contrib import admin
from django.contrib.admin import ModelAdmin, register
from .models import *

# Register your models here.

@register(Info)
class MaterialInfoAdmin(admin.ModelAdmin):
    icon_name = 'person'

@register(Taller)
class MaterialTallerAdmin(admin.ModelAdmin):
    icon_name = 'title'

@register(Evento)
class MaterialEventoAdmin(admin.ModelAdmin):
    icon_name = 'date_range'

@register(Campamento)
class MaterialCampaAdmin(admin.ModelAdmin):
    icon_name = 'change_history'

@register(Opiniones)
class MaterialOpcionAdmin(admin.ModelAdmin):
    icon_name = 'comment'

@register(Galeria)
class MaterialGaleriaAdmin(admin.ModelAdmin):
    icon_name = 'local_see'

@register(Blog)
class MaterialBlogAdmin(admin.ModelAdmin):
    icon_name = 'edit'

@register(Datos_contacto)
class MaterialContactAdmin(admin.ModelAdmin):
    icon_name = 'local_post_office'
