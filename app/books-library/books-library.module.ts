import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

//Container components
import { LibraryComponent } from './containers/library.component'

//Dumb Components
import { BooksListComponent } from './components/books-list.component'
import { WishlistComponent } from './components/wishlist.component'
import { BookComponent } from './components/book.component'

@NgModule({
    declarations:[
        LibraryComponent,
        BooksListComponent,
        WishlistComponent,
        BookComponent
    ],
    imports:[
        CommonModule,
        FormsModule
    ],
    exports:[
        LibraryComponent
    ]
})
export class BooksLibraryModule {
    
}