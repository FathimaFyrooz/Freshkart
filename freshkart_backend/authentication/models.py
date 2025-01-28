
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _

class User(AbstractUser):
    # Restrict the fields to just username, email, and password
    email = models.EmailField(_('email address'), unique=True)  # Make email unique

    REQUIRED_FIELDS = ['username','password']  # Require email along with the username
    USERNAME_FIELD = 'email'  # The field used for authentication

    def __str__(self):
        return self.username
