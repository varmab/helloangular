import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Book } from '../models/book.interface';

@Component({
    selector:'book',
    template:`
        <div>
            <h1>{{ book.title }}</h1>
            <button (click)="onAddToWishlist($event)">Add</button>
        </div>
    `
})
export class BookComponent {
    @Input()
    book:Book;

    @Output()
    addToWishlist:EventEmitter<any>=new EventEmitter<any>();

    constructor(){}

    onAddToWishlist(event){
        console.log('emitting')
        this.addToWishlist.emit(this.book)
    }
}