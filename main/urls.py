from django.urls import path
from .views import (
    Artists_Serializers, auth_status, Playlists_Serializers, getPlaylist_data, home_playlists, 
    show_favorites, addFavorite, addLikes
)

urlpatterns = [
    path('artists_api', Artists_Serializers.as_view()),
    path('playlists_api', home_playlists),
    path('auth_status', auth_status),
    path('getPlaylist_data/<int:id>', getPlaylist_data),
    path('show_favorites', show_favorites),
    path('addFavorite/<int:id>', addFavorite),
    path('addLikes/<int:id>', addLikes),
]