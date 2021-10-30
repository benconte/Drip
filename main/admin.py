from django.contrib import admin
from .models import (
    Song_Categories, Artists, Albums, Song_model, Playlists, Playlist_songs, UserArtists, 
    Album_songs, HomePagePlaylists, HomePagePlaylists_songs, UserPlaylists, UserPlaylists_songs, 
    UserInheritedPlaylists, DiscoverPage_UserInheritedPlaylists
)

# Register your models here.
admin.site.register(Playlists)
admin.site.register(Playlist_songs)
admin.site.register(Song_Categories)
admin.site.register(Artists)
admin.site.register(Albums)
admin.site.register(Song_model)
admin.site.register(UserArtists)
admin.site.register(Album_songs)
admin.site.register(HomePagePlaylists)
admin.site.register(HomePagePlaylists_songs)
admin.site.register(UserPlaylists)
admin.site.register(UserPlaylists_songs)
admin.site.register(UserInheritedPlaylists)
admin.site.register(DiscoverPage_UserInheritedPlaylists)