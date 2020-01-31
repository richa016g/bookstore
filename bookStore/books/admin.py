from django.contrib import admin
from books.models import Book, BookType, Author
# Register your models here.
admin.site.register(Author)
admin.site.register(BookType)
admin.site.register(Book)
