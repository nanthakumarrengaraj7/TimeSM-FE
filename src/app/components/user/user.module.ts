import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [
    UserListComponent,
    UserAddComponent,
    UserEditComponent,
  ],
  imports: [
    UserRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, UserService]
})
export class UserModule {}
