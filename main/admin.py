from django.contrib import admin
from .models import (
    Song_Categories, Artists, Albums, Song_model
)

# Register your models here.
admin.site.register(Song_Categories)
admin.site.register(Artists)
admin.site.register(Albums)
admin.site.register(Song_model)