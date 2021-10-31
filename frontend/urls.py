from django.urls import path
from .views import index, user_choose_fav_artist, user_choose_fav_artist_search

urlpatterns = [
    path('', index, name='home'),
    path('playlist/<int:id>', index),
    path('choose_artist', user_choose_fav_artist, name="choose_artist"),
	path("user_choose_fav_artist_search", user_choose_fav_artist_search, name="user_choose_fav_artist_search"),
]