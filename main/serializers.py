from .models import Artists, Playlists
from rest_framework import serializers

class ArtistsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Artists
        fields = '__all__'

class PlaylistsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Playlists
        fields = '__all__'