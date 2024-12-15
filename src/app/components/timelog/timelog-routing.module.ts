import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';
import { NgModule } from '@angular/core';
import { TimelogListComponent } from './timelog-list/timelog-list.component';
import { TimelogAddComponent } from './timelog-add/timelog-add.component';
import { ProjectService } from '../../../services/project.service';

const userRoutes: Routes = [
  { path: '', redirectTo: '/timelog-list',pathMatch:'full' } ,
  { path: 'timelog-list', component: TimelogListComponent },
  { path: 'timelog-add', component: TimelogAddComponent }
];

@NgModule({
  declarations: [ ],
  imports: [
    RouterModule.forChild(userRoutes),
  ],
  providers: [AuthService, UserService, ProjectService],
  exports: [RouterModule]
})
export class TimeLogRoutingModule {}
