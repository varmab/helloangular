import { Component } from '@angular/core'

@Component({
    selector:'welcome',
    template:`
        <div>
            Welcome to {{ name }} !!!
        </div>
    `
})
export class WelcomeComponent{
    name:string="Varma";
}