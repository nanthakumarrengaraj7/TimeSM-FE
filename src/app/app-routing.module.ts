import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: 'user-management', loadChildren: () => import('./components/user/user.module').then(m => m.UserModule) },
    { path: 'project-management', loadChildren: () => import('./components/project/project.module').then(m => m.ProjectModule ) },
    { path: 'timelog', loadChildren: () => import('./components/timelog/timelog.module').then(m => m.TimeLogModule ) }
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
