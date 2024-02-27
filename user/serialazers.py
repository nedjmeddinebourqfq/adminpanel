
from user.models import user
from rest_framework import serializers

#user serializer
class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = user
        fields = '__all__'
