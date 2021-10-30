from django.urls import path
from .views import Artists_Serializers, auth_status

urlpatterns = [
    path('artists_api', Artists_Serializers.as_view()),
    path('auth_status', auth_status),
]