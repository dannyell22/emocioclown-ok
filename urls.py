"""
EMOCIOCLOWN URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from APPWEB import views
from django.conf import settings 
from django.conf.urls.static import static


urlpatterns = [
    path ('admin/', admin.site.urls),
    path ('', include(('APPWEB.urls','appweb'))),

]+ static(settings.MEDIA_URL, document_root= settings.MEDIA_ROOT) 
admin.site.site_header = 'Emocioclown'
admin.site.site_title = 'Administración Emocioclown'
admin.site.main_bg_color = '#34a3d7'
admin.site.main_hover_color = '#6b27ff'
admin.site.favicon = settings.STATIC_URL+'img/background/favicon.png'
admin.site.profile_picture = settings.STATIC_URL+'img/background/bg-admin-lg.png'
admin.site.profile_bg = settings.STATIC_URL+'img/background/bg-admin.png' 
admin.site.login_logo = settings.STATIC_URL+'img/background/bg-admin-lg-login.png'
admin.site.logout_bg = settings.STATIC_URL+'img/background/bg-admin-login.png'
