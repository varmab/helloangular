import {RouterModule,  Routes} from '@angular/router';
import { UsersComponent } from './containers/users.component';
import { UserDetailsComponent } from './containers/userdetails.component'

var routes:Routes=[
    {path:'user',component:UsersComponent},
    {path:'user/:id',component:UserDetailsComponent}
];

export const UsersRouting=RouterModule.forRoot(routes);

