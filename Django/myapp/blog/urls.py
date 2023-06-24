from django.urls import path
from . import views

app_name ='blog'

urlpatters = [
    path('', views.post_list, name='list'),
    path('create', views.post_create, name='create'),
    path('<ink:pk>', views.post_detail, name='detail'),
    path('update/<ink:pk>', views.post_update, name='update'),
    path('delete/<ink:pk>', views.post_delete, name='delete'),
]