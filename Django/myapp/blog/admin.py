from django.contrib import admin 
from .models import Post, Comment #model import

# Register your models here.
admin.site.register(Post)
admin.site.register(Comment)
