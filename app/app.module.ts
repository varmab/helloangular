import { NgModule } from '@angular/core'

import { RouterModule, Routes } from '@angular/router'

import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { BooksLibraryModule } from './books-library/books-library.module'
import { UsersModule } from './users/users.module'

import { AppComponent} from './app.component'
import { WelcomeComponent } from './welcome.component'
import { CounterComponent } from './counter.component'
import { TodosComponent } from './todos.component';
import { LikeComponent } from './like.component';
import { FriendsComponent } from './friends.component'
import { HeaderComponent } from './header.component'

const routes:Routes=[
  {
    path:'',
    component:WelcomeComponent,
    pathMatch:'full'
  },
  {
    path:'counter',
    component:CounterComponent
  },
  {
    path:'todos',
    component:TodosComponent
  }
]

@NgModule({
  declarations:[
    AppComponent,
    WelcomeComponent,
    CounterComponent,
    TodosComponent,
    LikeComponent,
    FriendsComponent,
    HeaderComponent
  ],
  bootstrap:[AppComponent],
  imports:[
    BrowserModule,
    CommonModule,
    FormsModule,
    BooksLibraryModule,
    UsersModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    WelcomeComponent,
    TodosComponent
  ]
})
export class AppModule{

}