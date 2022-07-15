import json
import bson


from django.shortcuts import render, redirect
import string
import random
from .serializers import UrlMapSerializer, UserCredSerializer

from django.views.decorators.csrf import csrf_exempt

from demo.models import *
# Create your views here.

from django.http import HttpResponse

lengthOfShortUrl = 6


@csrf_exempt
def login(request):
    username = request.POST['username']
    password = request.POST['password']
    user = UserCred.objects(username=username, password=password)
    if len(user):
        user = user[0]
        return HttpResponse("logged In User Id is - > " + str(user['id']))
    else:
        return HttpResponse("Incorrect credentials")


@csrf_exempt
def signup(request):
    username = request.POST['username']
    password = request.POST['password']
    user = UserCred(username=username, password=password)
    user.save()
    return HttpResponse("Account created succesfully")


@csrf_exempt
def create_short_url(request):
    url = request.POST['url']
    short_url = ''.join(random.choices(string.ascii_uppercase +
                                       string.digits, k=lengthOfShortUrl))
    userid = request.POST['userid']
    if bson.objectid.ObjectId.is_valid(userid):
        pass
    else:
        return HttpResponse("Invalid Id")
    user = UserCred.objects(id=userid)
    if len(user):
        shorturl = UrlsMap(url=url, short_url=short_url, userid=userid)
        shorturl.save()
        new_url = "http://127.0.0.1:8000/" + short_url
        return HttpResponse("Url Created ->  " + new_url)
    else:
        return HttpResponse("Incorrect Id")


@csrf_exempt
def go(request, surl):
    url = UrlsMap.objects(short_url=surl)[0]
    return redirect(url.url)


@csrf_exempt
def get_shorturl(request):
    userid = request.POST['userid']
    print("here", userid)
    all_shorturl = UrlsMap.objects(userid=userid)
    print(all_shorturl)
    data = UrlMapSerializer(all_shorturl, many=True).data
    print(data)
    json_object = json.dumps(data, indent=4)
    return HttpResponse(json_object)
