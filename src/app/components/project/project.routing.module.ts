import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';
import { NgModule } from '@angular/core';
import { ListProjectsComponent } from './list-project/list-project.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { EditDuplicateProjectComponent } from './edit-duplicate-project/edit-duplicate-project.component';
import { AssignTasksComponent } from './assign-tasks/assign-tasks.component';
import { AssignUsersComponent } from './assign-users/assign-users.component';
import { SearchProjectComponent } from './search-project/search-project.component';
import { ProjectService } from '../../../services/project.service';

const userRoutes: Routes = [
    { path: '', redirectTo: 'list-project',pathMatch:'full' } ,
    { path: 'list-project', component: ListProjectsComponent },
    { path: 'add-project', component: AddProjectComponent },
    { path: 'edit-dublicate-project/:id', component: EditDuplicateProjectComponent },
    { path: 'assign-task', component: AssignTasksComponent },
    { path: 'assign-users', component: AssignUsersComponent },
    { path: 'search-project', component: SearchProjectComponent }
];

@NgModule({
  declarations: [ ],
  imports: [
    RouterModule.forChild(userRoutes),
  ],
  providers: [AuthService, ProjectService],
  exports: [RouterModule] 
})
export class ProjectRoutingModule {}
