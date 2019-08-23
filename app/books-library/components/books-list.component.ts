import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Book } from '../models/book.interface';

@Component({
    selector:'bookslist',
    template:`
        <div>
            <h1>Books List</h1>
            <book *ngFor="let book of books" [book]="book" (addToWishlist)="onAddToWishlist($event)"></book>
        </div>
    `
})
export class BooksListComponent {
    @Input()
    books:Book[];

    @Output()
    addToWishlist:EventEmitter<any>=new EventEmitter<any>();

    onAddToWishlist(event){
        console.log('received wishlist to books-list')
        this.addToWishlist.emit(event)
    }
}