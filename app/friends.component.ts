import { Component } from '@angular/core'

interface Friend{
    name:string;
    likeCount:number;
}

@Component({
    selector:'friends',
    template:`
        <div>
            <div *ngFor="let friend of friends">
                {{ friend.name }} {{ friend.likeCount }} <like></like>
            </div>
        </div>
    `
})
export class FriendsComponent{
    friends:Friend[]=[{
       name:"Ram",
       likeCount:0 
    },
    {
        name:"Robert",
        likeCount:0 
     },
     {
        name:"Rahim",
        likeCount:0 
     }]
}