from django.shortcuts import render, get_object_or_404
from .models import ( Artists, Song_Categories, Song_model )
from django.http import JsonResponse
from .serializers import ArtistsSerializers
from rest_framework import generics, status
from rest_framework.views import APIView
from django.contrib.auth.decorators import login_required
from rest_framework.response import Response
import json

# Create your views here.

class Artists_Serializers(generics.ListAPIView):
    queryset = Artists.objects.all()
    serializer_class = ArtistsSerializers