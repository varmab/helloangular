import { Component, Input, Output, EventEmitter } from '@angular/core'
import { User } from '../models/user.interface'

@Component({
    selector:'user',
    template:`
        <div>
            {{ user.name }}
            <div>
                {{ user.email}}
                <button (click)="handleClick(user.id)">Remove</button>
            </div>
            <hr/>
            <br/>
        </div>
    `
})
export class UserComponent{
    @Input()
    user:User;

    @Output()
    onRemoveUser:EventEmitter<any>=new EventEmitter<any>();

    handleClick(id){
        this.onRemoveUser.emit(this.user);
    }
}