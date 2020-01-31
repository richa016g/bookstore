import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/books.service';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent implements OnInit {

  bookTypes: string[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBookTypes().subscribe( (res: string[]) => {
      this.bookTypes = res;
    });
  }

}
