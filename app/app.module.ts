import { NgModule } from '@angular/core'

import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { BooksLibraryModule } from './books-library/books-library.module'
import { AppComponent} from './app.component'
import { WelcomeComponent } from './welcome.component'
import { CounterComponent } from './counter.component'
import { TodosComponent } from './todos.component';

@NgModule({
  declarations:[
    AppComponent,
    WelcomeComponent,
    CounterComponent,
    TodosComponent
  ],
  bootstrap:[AppComponent],
  imports:[
    BrowserModule,
    CommonModule,
    FormsModule,
    BooksLibraryModule
  ],
  exports:[
    WelcomeComponent
  ]
})
export class AppModule{

}