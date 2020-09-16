
from django.db import models


class Info(models.Model):
    titulo = models.CharField(max_length = 50, null = False)
    descripcion = models.TextField(blank = True, max_length = 300,null = False)
    imagen = models.ImageField(upload_to='personal')  #especificar el peso de la imágen
    link = models.URLField(null=True, blank=True, verbose_name="Dirección Web")

    def __str__(self):
        return self.titulo
    
    class Meta:
        verbose_name = 'Info'
        verbose_name_plural = 'Datos inicio'

class Taller(models.Model):
    titulo = models.CharField(max_length = 100, null = False)
    descripcion = models.TextField(blank = True, null = False)
    wasap = models.URLField(null=True, blank=True, verbose_name="Grupo de whatsapp")  #linkar grupo wasap
    imagen = models.ImageField(upload_to='taller')  #especificar el peso de la imágen
    modalidad = models.CharField(default=10, max_length = 30, null = False)
    fecha = models.DateField(auto_now=True)
    def __str__(self):
        return self.titulo
    class Meta:
        ordering = ['-fecha']
        verbose_name = 'Taller'
        verbose_name_plural = 'Talleres'
        

class Evento(models.Model):
    titulo = models.CharField(max_length = 100, null = False)
    descripcion = models.TextField(blank = True, null = False)
    imagen = models.ImageField(upload_to='evento')
    aforo = models.IntegerField(default = 3, null= True)
    fecha_inicio = models.DateField(null=True, blank=True) 
    fecha_fin = models.DateField(null=True, blank=True)
    edad = models.IntegerField(default=10, null= True)
    precio = models.FloatField(default = 10, null= True) 
    modalidad = models.CharField(default=10, max_length = 20, null = False)
    wasap = models.URLField(null=True, blank=True, verbose_name="Grupo de whatsapp") 

    def __str__(self):
        return self.titulo

    class Meta:
        ordering = ['-fecha_inicio']
        verbose_name = 'Evento'
        verbose_name_plural = 'Eventos'

class Campamento(models.Model):
    nombre = models.CharField(max_length = 100, null = False)
    descripcion = models.TextField(blank = True, null = False)
    fecha_inicio = models.DateField(null=True, blank=True)
    fecha_fin = models.DateField(null=True, blank=True) 
    imagen = models.ImageField(upload_to='campamento')
    modalidad = models.CharField(default=10, max_length = 20, null = False)
    wasap = models.URLField(null=True, blank=True, verbose_name="Grupo de whatsapp")  
  
    def __str__(self):
        return self.nombre

    class Meta:
        ordering = ['-fecha_inicio']
        verbose_name = 'Campamento'
        verbose_name_plural = 'Campamentos'

class Opiniones(models.Model):
    nombre = models.CharField(max_length = 50, null = False)
    descripcion = models.TextField(blank = True, null = False)

    def __str__(self):
        return self.nombre

    class Meta:
        verbose_name = 'Opiniones'
        verbose_name_plural = 'Opiniones'

class Galeria(models.Model):
    nombre = models.CharField(default='imagen', max_length = 50, null = False)
    imagen = models.ImageField(upload_to='galeria')

    def __str__(self):
        return self.nombre
    
    class Meta:
        verbose_name = 'Galeria'
        verbose_name_plural = 'Galeria'


class Blog(models.Model):
    titulo = models.CharField(max_length = 100, null = False)
    descripcion = models.TextField(blank = True,null = False)
    fecha = models.DateField(null=True, blank=True)
    imagen = models.ImageField(upload_to='blog')       

    def __str__(self):
        return self.titulo

    class Meta:
        ordering = ['-fecha']
        verbose_name = 'Blog'
        verbose_name_plural = 'Blog'

class Datos_contacto(models.Model):
    direccion = models.CharField(max_length = 20, null = False)
    telefono = models.CharField(max_length = 12, null = False)
    linkWha = models.URLField(null=True, blank=True, verbose_name="Número de whatsapp")  #linkar grupo wasap
    email = models.EmailField(max_length = 50, null = False)    
 
    def __str__(self):
        return self.direccion

    class Meta:
        verbose_name = 'Datos contacto'
        verbose_name_plural = 'Datos contacto'
    
