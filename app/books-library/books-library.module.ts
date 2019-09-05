import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

//Container components
import { LibraryComponent } from './containers/library.component'

//Dumb Components
import { BooksListComponent } from './components/books-list.component'
import { WishlistComponent } from './components/wishlist.component'
import { BookComponent } from './components/book.component'

//Services

import { BooksLibraryService } from './books-library.service'

@NgModule({
    declarations:[
        LibraryComponent,
        BooksListComponent,
        WishlistComponent,
        BookComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        HttpModule
    ],
    exports:[
        LibraryComponent
    ],
    providers:[
        BooksLibraryService
    ]
})
export class BooksLibraryModule {
    
}