import { Component } from '@angular/core'

@Component({
    selector:'welcome',
    template:`
        <div>
            <header></header>
            Welcome to {{ name }} !!!
        </div>
    `
})
export class WelcomeComponent{
    name:string="Varma";
}