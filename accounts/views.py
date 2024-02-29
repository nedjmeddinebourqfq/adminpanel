from django.shortcuts import render
from django.http import JsonResponse
import json
from django.contrib.auth import authenticate , login , logout
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.decorators.http import  require_POST

@require_POST
def login_view(request):
    data = json.loads(request.body)
    username = data.get("username")
    password = data.get("passworde")

    if username is None or password is None:
        return JsonResponse({"detail":"please provide username and password"})
    
    user = authenticate( username = username, password = password)
    if user is None:
        return JsonResponse({"detaile":"invalide credentials"}, status=400)
    login(request,user)
    return JsonResponse({"successfully logged in"})


def logout_view(request):
    if not request.user.is_authenticated:
        return JsonResponse({"detaile":"you are not loged in"}, status=400)
    logout(request)
    return JsonResponse({"detaile":"successfully logged out"})

    
@ensure_csrf_cookie
def session_view(request):
    if not request.user.is_authenticated:
        return JsonResponse({"isAuthenticated":False})
    return JsonResponse ({"isAuthenticated":True})

def whoami_view(request):
     if not request.user.is_authenticated:
        return JsonResponse({"isAuthenticated":False})
     return JsonResponse ({"username":request.user.username})

def react_app_view(request):
    return render(request, 'index.html')

from django.http import JsonResponse




    
   
# Create your views here.
