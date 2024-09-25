from django.db import models

class TouristSpot(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    description = models.TextField()
    rating = models.DecimalField(max_digits=3, decimal_places=1)
    image_url = models.URLField()

    def __str__(self):
        return self.name
