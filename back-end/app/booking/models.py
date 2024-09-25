from django.db import models
from django.conf import settings
from app.hotels.models import Hotel
from app.restaurants.models import Restaurant
from app.tourist_spots.models import TouristSpot

class Booking(models.Model):
    BOOKING_TYPE_CHOICES = [
        ('hotel', 'Hotel'),
        ('restaurant', 'Restaurant'),
        ('tourist_spot', 'Tourist Spot')
    ]
    
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    booking_type = models.CharField(max_length=20, choices=BOOKING_TYPE_CHOICES)
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE, null=True, blank=True)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, null=True, blank=True)
    tourist_spot = models.ForeignKey(TouristSpot, on_delete=models.CASCADE, null=True, blank=True)
    booking_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user.email} - {self.booking_type} on {self.booking_date}'
