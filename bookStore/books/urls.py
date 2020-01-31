
from django.urls import path, include
from books import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('books', views.BookView)
router.register('booktype', views.BookTypeView)

urlpatterns = [
    path('',include(router.urls))
]
