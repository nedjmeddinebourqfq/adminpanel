from django.urls import path , include
from .api  import RegisterAPI , loginAPI , UserAPI
from knox import  views as knox_views
from . import views
from .views import react_app_view
#urlpatterns = [
    #path('api/auth', include('knox.urls')),
    #path('api/auth/register',RegisterAPI.as_view()),
    #path('api/auth/login',loginAPI.as_view()),
    #path('api/auth/user',UserAPI.as_view()),
    #path('api/auth/logout',knox_views.LogoutView.as_view(),name = 'knox_logout')
#]

urlpatterns = [
    path('', react_app_view),
    path('login/',views.login_view, name="accounts_login" ),
    path('logout/',views.logout_view, name="accounts_logout" ),
    path('session/',views.session_view, name="accounts_session" ),
    path('whoami/',views.whoami_view, name="accounts_whoami" ),
    
   
]