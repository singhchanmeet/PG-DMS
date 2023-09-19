from rest_framework import serializers
from . models import Dissertation

class DissertationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dissertation
        fields = '__all__'
