from django.db import models
from django.contrib.auth.models import User

class Note(models.Model):
    # title = models.CharField(max_length=200)
    # content = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    id_time = models.CharField(max_length=200)

