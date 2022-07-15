from django.urls import path

from . import views

urlpatterns = [
    path('login', views.login, name='login'),
    path('signup', views.signup, name='signup'),
    path('shorturl', views.create_short_url, name='shorturl'),
    path('geturl', views.get_shorturl, name='geturl'),
    path('<str:surl>', views.go, name='go')
]