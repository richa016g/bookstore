import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getAllBooks().subscribe((res: Book[]) => {
        this.books = res;
    });
  }

}
