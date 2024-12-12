import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectManagementComponent } from './components/project-management/project-management.component';
import { TimelogManagementComponent } from './components/timelog-management/timelog-management.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-management', loadChildren: () => import('./components/user/user.module').then(m => m.UserModule) },
    { path: 'project-management', loadChildren: () => import('./components/project/project.module').then(m => m.ProjectModule ) },
    { path: 'timelog-management', component: TimelogManagementComponent },
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
