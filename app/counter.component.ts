import { Component } from '@angular/core'

@Component({
    selector:'counter',
    template:`
        <div>
            <header></header>
            <h1>Counter</h1>
            <p>{{ count }}</p>
            <button (click)="increment($event)">Increment</button>
            <button (click)="decrement($event)" [disabled]="disableDecrement">Decrement</button>
        </div>
    `
})
export class CounterComponent{
    count:number=0;
    disableDecrement:boolean=true;

    increment(event){
        this.count++;
        this.disableDecrement=false;
    }

    decrement(event){
        this.count--;
        if(this.count==0){
            this.disableDecrement=true;
        }
    }
}