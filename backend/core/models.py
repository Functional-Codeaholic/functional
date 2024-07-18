from django.db import models

# Create your models here.
class Pages(models.Model):
    name = models.CharField(max_length=255, unique=True, null=False)
    h1 = models.CharField(max_length=60, null=False)
    
    def __str__(self):
        return self.name