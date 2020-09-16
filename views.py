from django.contrib.auth.models import User
from django.shortcuts import render,redirect
from django.views.generic import TemplateView, ListView, FormView
from .models import *
from .forms import *
from django.urls import reverse_lazy
from django.core.mail import send_mail
from django.db.models import Q
import math




# Create your views here.
    
class Index(FormView):
    template_name = 'APPWEB/index.html'
    form_class = ContactForm
    success_url = reverse_lazy('appweb:index')

    def get_context_data(self,**kwargs):
        context=super(Index, self).get_context_data(**kwargs)
        context['monica'] = Info.objects.get(pk=1)
        context['emocioclown'] = Info.objects.get(pk=2)
        context['talleres'] = Taller.objects.all()[:3]

        context['eventos'] = Evento.objects.all()
        numSlides = math.ceil(len(context['eventos'])/3)
        context['numSlidesArray'] = list(range(0, numSlides))

        context['campamentos'] = Campamento.objects.all()      
        numFotos = math.ceil(len(context['campamentos'])/3)
        context['numArray'] = list(range(0, numFotos))

        context['opiniones'] = Opiniones.objects.all()
        context['galerias'] = Galeria.objects.all()
        context['blog'] = Blog.objects.all()
        context['contacto'] = Datos_contacto.objects.all()

        return context 

    def form_valid(self, form):
        nombre = form.cleaned_data['nombre']
        email = form.cleaned_data['email']
        asunto = form.cleaned_data['asunto']
        mensaje = "{0} Te ha enviado un mensaje:\n\n {1}".format(nombre, form.cleaned_data['mensaje'])
        send_mail(asunto, mensaje, email, ['laliiosorio@gmail.com'], fail_silently = False)
        
        return super(Index, self).form_valid(form)
     

class InfoTaller(ListView):
    model = Taller
    template_name = 'APPWEB/taller.html'

    def get_context_data(self,**kwargs):
        context = super(InfoTaller, self).get_context_data(**kwargs)
        context['contactoInfo']= Datos_contacto.objects.all()[0]
        context['taller'] = Taller.objects.get(pk=self.kwargs.get('pk', None))
        return context

class InfoCamp(ListView):
    model = Campamento
    template_name = 'APPWEB/campamento.html'

    def get_context_data(self,**kwargs):
        context=super(InfoCamp, self).get_context_data(**kwargs) 
        context['contactoInfo']= Datos_contacto.objects.all()[0]
        context['campamento'] = Campamento.objects.get(pk=self.kwargs.get('pk', None))
        return context  

class InfoEvent(ListView):
    model = Evento
    template_name = 'APPWEB/evento.html'

    def get_context_data(self,**kwargs):
        context=super(InfoEvent, self).get_context_data(**kwargs) 
        context['contactoInfo']= Datos_contacto.objects.all()[0]
        context['evento'] = Evento.objects.get(pk=self.kwargs.get('pk', None))
        return context 

class InfoBlog(ListView):
    model = Blog
    template_name = 'APPWEB/blog.html'
    context_object_name = 'blogs'
    queryset = Blog.objects.all()
    paginate_by = 6

class SingleBlog(ListView):
    model = Blog
    template_name = 'APPWEB/blog-single.html'

    def get_context_data(self,**kwargs):
        context = super(SingleBlog, self).get_context_data(**kwargs)
        parametro = self.kwargs.get('pk', None)
        context['singleBlog'] = Blog.objects.filter(id=parametro)
        context['lastPosts'] = Blog.objects.all

        return context

             
