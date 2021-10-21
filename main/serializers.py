from .models import Artists
from rest_framework import serializers

class ArtistsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Artists
        fields = '__all__'