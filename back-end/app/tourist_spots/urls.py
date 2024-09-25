from django.urls import path
from .views import TouristSpotListView, TouristSpotDetailView

urlpatterns = [
    path('', TouristSpotListView.as_view(), name='tourist-spot-list'),
    path('<int:pk>/', TouristSpotDetailView.as_view(), name='tourist-spot-detail'),
]
