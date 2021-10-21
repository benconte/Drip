from django.urls import path
from .views import Artists_Serializers

urlpatterns = [
    path('artists_api', Artists_Serializers.as_view()),
]