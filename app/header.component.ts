import { Component } from '@angular/core'

@Component({
    selector:'header',
    template:`
            <ul>
                <li><a [routerLink]="['/']">Welcome</a></li>
                <li><a [routerLink]="['/counter']">Counter</a></li>
                <li><a [routerLink]="['/todos']">Todos</a></li>
            </ul>
    `
})
export class HeaderComponent{

}