import { Component } from '@angular/core'

@Component({
    selector:'todos',
    template:`
        <div>
            <h1>Todos</h1>
            <input type="text" [(ngModel)]="todo" name="todo">
            <button (click)="addTodo($event)">Add Todo</button>
            <ul>
                <li *ngFor="let todo of todos">
                    {{ todo }}
                </li>
            </ul>
        </div>
    `
})
export class TodosComponent{
    todos:string[]=[];
    todo:string='';

    addTodo(){
       this.todos.push(this.todo); 
       this.todo='';
    }

}