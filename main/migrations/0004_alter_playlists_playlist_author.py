# Generated by Django 3.2.8 on 2021-10-30 17:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_album_songs_discoverpage_userinheritedplaylists_homepageplaylists_homepageplaylists_songs_playlist_s'),
    ]

    operations = [
        migrations.AlterField(
            model_name='playlists',
            name='playlist_author',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='playlist_author', to='main.artists'),
        ),
    ]
