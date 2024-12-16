import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';
import { NgModule } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';

const userRoutes: Routes = [
  { path: '', redirectTo: '/dashboard-view',pathMatch:'full' } ,
  { path: 'dashboard-view', component: DashboardViewComponent },
];

@NgModule({
  declarations: [ ],
  imports: [
    RouterModule.forChild(userRoutes),
  ],
  providers: [AuthService, UserService, ProjectService],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
