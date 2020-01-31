import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { IssueBookComponent } from './books/issue-book/issue-book.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptor } from './services/httpHeader.interceptor';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    IssueBookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
      // {
      //   provide: HTTP_INTERCEPTORS,
      //   useClass: HttpInterceptor,
      //   multi: true
      // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
