import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { IssueBookComponent } from './books/issue-book/issue-book.component';
import { BooksComponent } from './books/books.component';

const appRoutes: Routes = [
    {path: 'issue', component: IssueBookComponent},
    {path: '', component: BooksComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
