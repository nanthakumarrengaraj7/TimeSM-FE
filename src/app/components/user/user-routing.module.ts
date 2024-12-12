import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';
import { NgModule } from '@angular/core';

const userRoutes: Routes = [
  { path: '', redirectTo: '/user-management-list',pathMatch:'full' } ,
  { path: 'user-management-list', component: UserListComponent },
  { path: 'user-management-add', component: UserAddComponent },
  { path: 'user-management-edit/:id', component: UserEditComponent }
  
];

@NgModule({
  declarations: [ ],
  imports: [
    RouterModule.forChild(userRoutes),
  ],
  providers: [AuthService, UserService],
  exports: [RouterModule]
})
export class UserRoutingModule {}
