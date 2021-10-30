from django.shortcuts import render, get_object_or_404
from .models import ( 
    Artists, Song_Categories, Song_model, Playlists
)
from django.http import JsonResponse
from .serializers import (
    ArtistsSerializers, PlaylistsSerializers
)
from rest_framework import generics, status
from rest_framework.views import APIView
from django.contrib.auth.decorators import login_required
from rest_framework.response import Response
import json

# Create your views here.
@login_required
def auth_status(request):
    if(request.user.is_authenticated):
        usr_img = json.dumps(str(request.user.profile.image))
        profile = usr_img.replace('"', "")
        return JsonResponse({
            "id": request.user.id,
            "username": request.user.username,
            "profile": profile
        }, status=status.HTTP_200_OK, safe=False)
    return JsonResponse({'error': "Please Authenticate before continuing"}, status=status.HTTP_401_UNAUTHORIZED, safe=False)
    

class Artists_Serializers(generics.ListAPIView):
    queryset = Artists.objects.all()
    serializer_class = ArtistsSerializers

class Playlists_Serializers(generics.ListAPIView):
    queryset = Playlists.objects.all()
    serializer_class = PlaylistsSerializers

