from django import forms

class ContactForm(forms.Form):
    nombre = forms.CharField( max_length= 50, required=True, widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Nombre'}))
    email = forms.EmailField(required=True, widget=forms.EmailInput(attrs={'class': 'form-control', 'placeholder': 'Correo electrónico'}))
    asunto = forms.CharField(max_length= 50, required=True, widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Asunto'}))
    mensaje = forms.CharField(max_length=300, required=True, widget=forms.Textarea(attrs={'class': 'form-control', 'placeholder': 'Mensaje'}))