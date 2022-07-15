from rest_framework_mongoengine import serializers

from .models import UrlsMap, UserCred


class UrlMapSerializer(serializers.DocumentSerializer):
    class Meta:
        model = UrlsMap
        fields = '__all__'


class UserCredSerializer(serializers.DocumentSerializer):
    class Meta:
        model = UserCred
        fields = '__all__'
