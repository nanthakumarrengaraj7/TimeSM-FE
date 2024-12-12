import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../../services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-projects',
  standalone:false,
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectsComponent implements OnInit {
  projects: any[] = [];

  constructor(private projectService: ProjectService,private router:Router) {}

  ngOnInit(): void {
    this.getAllProjects();
  }

  addproject(){
    this.router.navigate(['/project-management/add-project']);
  }
  getAllProjects() {
    this.projectService.getAllProjects().subscribe((data: any[]) => {
      this.projects = data;
    });
  }
  deleteProject(id: any) {
    this.projectService.deleteProjectById(id).subscribe(() => {
      this.getAllProjects();
    });
  }

  editProject(id: any) {
    this.router.navigate(['/project-management/edit-dublicate-project/'+id]);
  }
}