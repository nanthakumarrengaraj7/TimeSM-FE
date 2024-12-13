import { Component } from '@angular/core';
import { ProjectService } from '../../../../services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-project',
  standalone:false,
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
  project = {
    projectName: '',
    clientName: '',
    department: '',
    businessUnit: '',
    projectType: ''
  };

  constructor(private projectService: ProjectService,private router:Router) {}

  addProject() {
    this.projectService.addProject(this.project).subscribe(response => {
      console.log('Project added:', response);
    });
  }
  back(){
    this.router.navigate(['/project-management/list-project'])
  }
}
