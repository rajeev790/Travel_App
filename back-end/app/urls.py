from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),              # Admin panel
    path('auth/', include('app.auth.urls')),      # Authentication URLs
    path('hotels/', include('app.hotels.urls')),  # Hotels URLs
    path('restaurants/', include('app.restaurants.urls')),  # Restaurants URLs
    path('tourist-spots/', include('app.tourist_spots.urls')),  # Tourist spots URLs
    path('bookings/', include('app.bookings.urls')),  # Bookings URLs
]
