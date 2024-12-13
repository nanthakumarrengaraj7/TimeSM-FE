import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../../services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assign-tasks',
  templateUrl: './assign-tasks.component.html',
  standalone:false,
  styleUrls: ['./assign-tasks.component.css']
})
export class AssignTasksComponent implements OnInit {
  projects: any[] = [];
  taskAssignment = {
    projectId: '',
    tasks: [{
      taskName: '',
      plannedHours: 0
    }]
  };

  constructor(private projectService: ProjectService,private router:Router) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.projectService.getAllProjects().subscribe(data => {
      this.projects = data;
    });
  }

  back(){
    this.router.navigate(['/project-management/list-project'])
  }

  assignTasks() {
    this.projectService.assignTaskToProject(this.taskAssignment).subscribe(
      response => {
        console.log('Task assigned:', response);
      },
      error => {
        console.error('Error assigning tasks:', error);
      }
    );
  }
}
