import { AuthService } from '../../../services/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddProjectComponent } from './add-project/add-project.component';
import { AssignUsersComponent } from './assign-users/assign-users.component';
import { AssignTasksComponent } from './assign-tasks/assign-tasks.component';
import { EditDuplicateProjectComponent } from './edit-duplicate-project/edit-duplicate-project.component';
import { ListProjectsComponent } from './list-project/list-project.component';
import { SearchProjectComponent } from './search-project/search-project.component';
import { ProjectRoutingModule } from './project.routing.module';
import { ProjectService } from '../../../services/project.service';
import { UserService } from '../../../services/user.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
  declarations: [
    AddProjectComponent,
    AssignUsersComponent,
    AssignTasksComponent,
    EditDuplicateProjectComponent,
    ListProjectsComponent,
    SearchProjectComponent
  ],
  imports: [
    ProjectRoutingModule,
    CommonModule,
    FormsModule,
    NgSelectModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [AuthService, ProjectService,UserService]
})
export class ProjectModule {}
