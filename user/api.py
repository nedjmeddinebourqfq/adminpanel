from user.models import user
from django.contrib.auth.models import User
from rest_framework import viewsets , permissions
from .serialazers import userSerializer
#user viewsets
class userViewset(viewsets.ModelViewSet):
    
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = userSerializer

    def get_queryset(self):
        return self.request.user.user.all()
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
        
    
    

