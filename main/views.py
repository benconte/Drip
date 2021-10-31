from django.shortcuts import render, get_object_or_404
from .models import ( 
    Artists, Song_Categories, Song_model, Playlists, Playlist_songs
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


def getPlaylist_data(request, id):
    playlist = Playlists.objects.get(id=id);
    if playlist:
        data = Playlist_songs.objects.filter(playlist=playlist).all() 
        playlist_img = json.dumps(str(playlist.playlist_img))
        plt_img = playlist_img.replace('"', "")

        playlist_artists = []
        for artists in playlist.playlist_author.all():
            playlist_artists.append(artists.name)

        songs = []
        for dat in data:
            song_img = json.dumps(str(dat.song_model.song_img))
            song_path = json.dumps(str(dat.song_model.song_path))
            img = song_img.replace('"', "")
            song = song_path.replace('"', "")

            artists_list = []
            for artists in dat.song_model.song_authers.all():
                artists_list.append(artists.name)

            is_liked = False
            is_favorite = False

            if dat.song_model.likes.filter(id=request.user.id):
                is_liked = True
            else:
                is_liked = False
            
            if dat.song_model.favorite.filter(id=request.user.id):
                is_favorite = True
            else:
                is_favorite = False

            songs.append({
                "id": dat.song_model.id,
                "img": img,
                "song": song,
                "name": dat.song_model.song_name,
                "lyrics": dat.song_model.lyrics,
                "is_liked": is_liked,
                "is_favorite": is_favorite,
                "total_likes": dat.song_model.likes.count(),
                "authers": artists_list,
                "album": dat.song_model.album.name if dat.song_model.album != None else "-"
            }) 
        return JsonResponse({
            "playlist_id": playlist.id,
            "playlist_name": playlist.name,
            "playlist_authers": playlist_artists,
            "playlist_img": plt_img,
            "playlist_likes": playlist.likes.count(),
            "songs": songs
        }, status=status.HTTP_200_OK, safe=False)
    return JsonResponse({"msg": "error getting playlist songs"}, status=status.HTTP_401_UNAUTHORIZED, safe=False)
    