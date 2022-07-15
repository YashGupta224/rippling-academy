from django.db import models
from mongoengine import *

# Create your models here.


class UserCred(Document):
    username = StringField()
    password = StringField()


class UrlsMap(Document):
    short_url = StringField()
    url = StringField()
    userid = StringField()