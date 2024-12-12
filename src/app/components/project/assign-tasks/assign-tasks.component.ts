import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../../services/project.service';

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
    task: {
      name: '',
      plannedHours: 0
    }
  };

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.projectService.getAllProjects().subscribe(data => {
      this.projects = data;
    });
  }

  assignTasks() {
    this.projectService.assignTaskToProject(this.taskAssignment).subscribe(response => {
      console.log('Task assigned:', response);
    });
  }
}
