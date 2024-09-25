from rest_framework import generics
from rest_framework.permissions import AllowAny
from .models import TouristSpot
from .serializers import TouristSpotSerializer

class TouristSpotListView(generics.ListAPIView):
    queryset = TouristSpot.objects.all()
    serializer_class = TouristSpotSerializer
    permission_classes = [AllowAny]

class TouristSpotDetailView(generics.RetrieveAPIView):
    queryset = TouristSpot.objects.all()
    serializer_class = TouristSpotSerializer
    permission_classes = [AllowAny]
