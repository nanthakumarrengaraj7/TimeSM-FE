import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../../../services/project.service';

@Component({
  selector: 'app-edit-duplicate-project',
  templateUrl: './edit-duplicate-project.component.html',
  standalone:false,
  styleUrls: ['./edit-duplicate-project.component.css']
})
export class EditDuplicateProjectComponent implements OnInit {
  projectId: string = '';
  project = {
    projectName: '',
    clientName: '',
    department: '',
    businessUnit: '',
    projectType: ''
  };

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('id')!;
    this.getProjectDetails();
  }

  getProjectDetails() {
    this.projectService.getProjectById(this.projectId).subscribe((data:any) => {
      this.project = data;
    });
  }

  editProject() {
    this.projectService.updateProject(this.projectId, this.project).subscribe((response:any) => {
      console.log('Project updated:', response);
      this.router.navigate(['/projects']);
    });
  }

  duplicateProject() {
    const duplicateProject = { ...this.project, projectName: `${this.project.projectName} - Copy` };
    this.projectService.addProject(duplicateProject).subscribe((response:any) => {
      console.log('Project duplicated:', response);
      this.router.navigate(['/projects']);
    });
  }
}
