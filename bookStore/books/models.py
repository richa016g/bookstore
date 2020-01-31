from django.db import models

# Create your models here.
class BookType(models.Model):
    btype = models.CharField(max_length=50)

    def __str__(self):
        return self.btype

class Author(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Book(models.Model):
    bookType = models.ForeignKey(BookType, on_delete=models.PROTECT)
    book_name = models.CharField(max_length=255)
    # author = models.CharField(max_length=255)
    author = models.ForeignKey(Author, on_delete=models.PROTECT)
    totalCopies = models.IntegerField()
    availableCopies = models.IntegerField()

    def __str__(self):
        return self.book_name+ " ("+str(self.availableCopies)+")"