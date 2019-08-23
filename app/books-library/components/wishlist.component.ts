import { Component, Input} from '@angular/core'
import { Book } from '../models/book.interface';

@Component({
    selector:'wishlist',
    template:`
        <div>
            <h1>Wish List</h1>
            <book *ngFor="let book of books" [book]="book"></book>
        </div>
    `
})
export class WishlistComponent {
    @Input()
    books:Book[];
}