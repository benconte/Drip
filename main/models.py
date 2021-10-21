from django.db import models
from django.utils import timezone
from django.urls import reverse
from django.contrib.auth.models import User
from PIL import Image
# Create your models here.


class Song_Categories(models.Model):
    category = models.CharField(max_length=200)
    category_color = models.CharField(max_length=200)
    category_img = models.ImageField(upload_to='category_images', default='category.jpg')

    def __str__(self):
        return f'Song_Categories({self.category}, {self.category_color})'

class Artists(models.Model):
    name = models.CharField(max_length=200)
    img = models.ImageField(upload_to='art_img')
    followers_fans = models.ManyToManyField(User, related_name="followers_fans", blank=True)
    biography = models.TextField(null=True)

    def __str__(self):
        return f"Artists({self.name})"

    def total_followers(self):
        return self.followers_fans.count()

class Albums(models.Model):
    name = models.CharField(max_length=200)
    album_author = models.CharField(max_length=200)
    album_artist = models.ManyToManyField(Artists, blank=True, related_name="album_artist")
    album_img = models.ImageField(upload_to='album_imgs', default='playlist_icon.jpg')
    date_created = models.DateTimeField(default=timezone.now)
    likes = models.ManyToManyField(User, related_name="album_name", blank=True)
    favorite = models.ManyToManyField(User, related_name="album_favorite", blank=True)


    def __str__(self):
        return f"Albums({self.name},{self.date_created})"

    def total_likes(self):
        return self.likes.count()

    def get_absolute_url(self):
        return reverse('home')

class Song_model(models.Model):
    album = models.ForeignKey(Albums, on_delete=models.CASCADE, related_name='album_model',null=True, blank=True)
    song_name = models.CharField(max_length=200)
    song_auther_written = models.CharField(max_length=200)
    song_authers = models.ManyToManyField(Artists, blank=True,  related_name="song_authers")
    song_img = models.ImageField(upload_to='song_model_images')
    song_path = models.FileField(upload_to='song_model_songs')
    reference_name = models.CharField(max_length=200, null=True)
    date_released = models.DateTimeField(default=timezone.now)
    lyrics = models.TextField(null=True, blank=True)
    song_category = models.ForeignKey(Song_Categories, on_delete=models.CASCADE, null=True)
    likes = models.ManyToManyField(User, related_name="song_name", blank=True)
    favorite = models.ManyToManyField(User, related_name="favorite_song", blank=True)

    def __str__(self):
        return f"Song({self.song_name}, {self.song_auther_written}, {self.song_category})"

    def authers_as_list(self):
        artists_list = []
        for artists in self.song_authers.all():
            artists_list.append(artists.name)

        return artists_list
        
    def get_absolute_url(self):
        return reverse('home')

    def total_likes(self):
        return self.likes.count()
    
class UserArtists(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False, related_name="user_choose_artists")
    userartist = models.ForeignKey(Artists, on_delete=models.CASCADE, null=True, blank=True, related_name='user_artist')

    def __str__(self):
        return f"UserArtists({self.userartist}, {self.user.username})"