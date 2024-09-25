from django.db import models

class Restaurant(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    cuisine_type = models.CharField(max_length=255)
    rating = models.DecimalField(max_digits=3, decimal_places=1)
    price_range = models.CharField(max_length=50)
    image_url = models.URLField()

    def __str__(self):
        return self.name
