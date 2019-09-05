import { Component, OnInit } from '@angular/core'
import { BooksLibraryService } from '../books-library.service'
import { Book } from '../models/book.interface'

@Component({
    selector:'books-library',
    template:`
        <div>
            <h1>Library</h1>
            <bookslist [books]="books" (addToWishlist)="onAddToWishlist($event)"></bookslist>
            <wishlist [books]="wishlist"></wishlist>
        </div>
    `
})
export class LibraryComponent implements OnInit {
    
    books: Book[];
    wishlist: Book[]=[];

    constructor(private booksLibraryService:BooksLibraryService){}
    
    ngOnInit(){
        this.booksLibraryService.getBooks()
        .subscribe((data:Book[])=>{
            this.books=data;
        },
        (error)=>{
            console.log(error)
        });
    }

    onAddToWishlist(event){
        console.log('received wishlist to library')
        console.log(event);
        this.wishlist.push(event);
    }
}