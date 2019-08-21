import { Component } from '@angular/core'

@Component({
  selector:"app-root",
  template:`
    <div class="app">
      <books-library></books-library>
      <h1>{{ name }}</h1>

      <h1>Property Binding</h1>
      <h1 [innerHtml]="name"></h1>

      <h1>Event Binding</h1>
      <input type="text" (input)="handleInput($event)" [value]="name" (blur)="handleBlur($event)"/>
      <button (click)="handleClick()">Reset Name</button>

      <div>
          <h1>Two way binding</h1>
          <input type="text" [(ngModel)]="name"/>
      </div>

      <div>
          <h1>Template Ref</h1>
          <button (click)="handleUsername(username.value)">Update Username</button>
          <input type="text" #username/>
          <div>
            {{userName}}
          </div>
      </div>

      <div>
          <input type="text" [(ngModel)]="name"/>
          <div *ngIf="name.length>0">
            Searching for {{name}}
          </div>
      </div>

      <div>
          <h1>My Friends</h1>
          <ul>  
              <li *ngFor="let friend of friends; let i=index;">
                {{ i+1 }} {{ friend }}
              </li>
          </ul>
      </div>

      <div>
          <ul *ngFor="let person of people">
            <li [ngClass]="{
              'text-success':person.country === 'UK',
              'text-primary':person.country === 'USA',
              'text-danger':person.country === 'HK'
            }">{{ person.name }} ({{ person.country }})
            </li>
          </ul>
      </div>

      <div>
          <h1>Currency Pipe</h1>
          {{ 123.45 | currency:'INR':'symbol' }}
      </div>
      <div>
          <h1>Date Pipe</h1>
          <p>{{ today | date:'fullDate' }}</p>
          <p>{{ today | date:'shortTime' }}</p>
          <p>{{ today | date:'d/M/y' }}</p>
      </div>
      <div>
          <h1>Percent Pipe</h1>
          <p>{{ 0.23323 | percent }}</p>
      </div>
      <div>
          <h1>Lowercase Pipe</h1>
          <p>{{ name | lowercase }}</p>
          <h1>Uppercase Pipe</h1>
          <p>{{ name | uppercase }}</p>
      </div>
      <div>
            <h1>JSON Pipe</h1>
            {{ student | json }}
      </div>
      <div>
            {{ student.subjects?.length }}
      </div>
    </div>
  `,
  styleUrls:['app.component.scss']
})
export class AppComponent{
  name:string="Varma"
  userName:string="";
  today: Date = new Date();
  student={
    name:"Varma",
    age:46,
    subjects:null
  }
  friends:string[]=["Ram","Robert","Rahim"]
  people: any[] = [
    {
      "name": "Douglas  Pace",
      "country": 'UK'
    },
    {
      "name": "Mcleod  Mueller",
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "country": 'USA'
    }
  ];

  handleBlur(event){
    this.name=event.target.value;
  }

  handleClick(){
    this.name="Varma";
  }

  handleInput(event){
    this.name=event.target.value;
  }

  handleUsername(value:string){
    this.userName=value;
  }
}


