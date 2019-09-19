import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

//Containers
import { UsersComponent } from '../users/containers/users.component';
import { UserDetailsComponent } from '../users/containers/userdetails.component';

//Components
import { UserComponent } from '../users/components/user.component'

//Services
import { UsersService } from '../users/users.service'

//Routing
import { UsersRouting } from './users.routing'

@NgModule({
    declarations:[
        UsersComponent,
        UserDetailsComponent,
        UserComponent
    ],
    imports:[
        CommonModule,
        UsersRouting
    ],
    exports:[
        UsersComponent
    ],
    providers:[
        UsersService
    ]
})
export class UsersModule {
    
}