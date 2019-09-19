import { Component, OnInit, Input } from '@angular/core'

import { UsersService } from '../users.service'
import { User } from '../models/user.interface';

@Component({
    selector:'users',
    template:`
        <h1>Users</h1>
        <hr/>
        <div>
            <user *ngFor="let user of users" [user]="user" (onRemoveUser)="onRemoveUser($event)"></user>
        </div>
    `
})
export class UsersComponent implements OnInit{
    users:User[];

    constructor(private usersService:UsersService){}

    ngOnInit(){
        this.usersService.getUsers().subscribe(
            (users)=>{ 
                this.users=users;
            },
            (error)=>{
                console.log("failed to get users")
            }
        )
    }

    onRemoveUser(user){
        console.log(user)

        this.users=this.users.filter((currentUser)=>{
            return currentUser.name!==user.name
        })
    }
}