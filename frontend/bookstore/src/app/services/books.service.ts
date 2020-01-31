import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export class BookService {

    constructor(private http: HttpClient) {}

    getAllBooks() {
        const url = `http://localhost:8000/books/`;
        return this.http.get(url);
    }

    getBookTypes() {
        const url = 'http://localhost:8000/booktype/';
        return this.http.get(url);
    }
}
