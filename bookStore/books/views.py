from django.shortcuts import render
from rest_framework import viewsets
from books.serializers import BookSerializer, BookTypeSerializer
from books.models import Book, BookType
# Create your views here.

class BookView(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class BookTypeView(viewsets.ModelViewSet):
    queryset = BookType.objects.all()
    serializer_class = BookTypeSerializer