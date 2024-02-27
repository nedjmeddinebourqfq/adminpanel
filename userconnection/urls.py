
from django.contrib import admin
from django.urls import path , include
from django.shortcuts import render
from django.views.generic import TemplateView

def react_app_view(request):
    return render(request, 'index.html')

urlpatterns = [
    path('', react_app_view , name = "index"),
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),  # Serve React app's index.html
    path('accounts/', include('accounts.urls')),
]
