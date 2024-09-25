from rest_framework import serializers
from .models import Booking

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['id', 'user', 'booking_type', 'hotel', 'restaurant', 'tourist_spot', 'booking_date', 'created_at']
        read_only_fields = ['created_at']
