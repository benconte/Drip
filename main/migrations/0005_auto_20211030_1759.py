# Generated by Django 3.2.8 on 2021-10-30 17:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_alter_playlists_playlist_author'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='playlists',
            name='playlist_author',
        ),
        migrations.AddField(
            model_name='playlists',
            name='playlist_author',
            field=models.ManyToManyField(blank=True, related_name='playlist_author', to='main.Artists'),
        ),
    ]
