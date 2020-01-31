from rest_framework import serializers
from books.models import Book, BookType

class BookSerializer(serializers.ModelSerializer):
    bookName = serializers.CharField(source='book_name', read_only=True)
    authorName = serializers.CharField(source='author.name', read_only=True)
    bookType = serializers.CharField(source='bookType.btype', read_only=True)
    class Meta:
        model = Book
        fields= ('id', 'bookName', 'bookType', 'authorName', 'availableCopies', 'totalCopies', )


class BookTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookType
        fields = ('id', 'btype')