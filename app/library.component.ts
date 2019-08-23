import { Component } from '@angular/core';

interface Book {
    title:string;
    author:string;
}

@Component({
    selector:"library",
    template:`
        <div>
            <h1>Books Library</h1>
            <input type="text" #title/>
            <input type="text" #author/>
            <button (click)="addBook(title.value,author.value)">Add Book</button>
            <table>
                <tr>
                    <td>Title</td>
                    <td>Author</td>
                </tr>
                <tr *ngFor="let book of books">
                    <td>{{ book.title }}</td>
                    <td>{{ book.author }}</td>
                </tr>
            </table>
        </div>
    `
})
export class LibraryComponent {
    books:Book[]=[];

    addBook(title:string,author:string){
        var newBook={
            title,
            author
        }

        this.books.push(newBook)
    }
}