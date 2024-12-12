import { Component } from '@angular/core';
import { ProjectService } from '../../../../services/project.service';

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

  constructor(private projectService: ProjectService) {}

  addProject() {
    this.projectService.addProject(this.project).subscribe(response => {
      console.log('Project added:', response);
    });
  }
}
