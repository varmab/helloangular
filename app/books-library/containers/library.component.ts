import { Component, OnInit } from '@angular/core'

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
    
    ngOnInit(){
        this.books=[
            {
                id:1,
                title:'JS Fundamentals',
                author:'Varma'
            },
            {
                id:2,
                title:'React Beginner',
                author:'Varma'
            },
            {
                id:3,
                title:'Node Pro',
                author:'Varma'
            }
        ]
    }

    onAddToWishlist(event){
        console.log('received wishlist to library')
        console.log(event);
        this.wishlist.push(event);
    }
}