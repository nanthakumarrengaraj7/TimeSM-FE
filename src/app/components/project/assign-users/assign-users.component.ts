import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../../services/project.service';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-assign-users',
  templateUrl: './assign-users.component.html',
  standalone:false,
  styleUrls: ['./assign-users.component.css']
})
export class AssignUsersComponent implements OnInit {
  projects: any[] = [];
  users: any[] = [];
  assignment = {
    projectId: '',
    users: []
  };

  constructor(private projectService: ProjectService, private userService: UserService) {}

  ngOnInit(): void {
    this.getProjects();
    this.getUsers();
  }

  getProjects() {
    this.projectService.getAllProjects().subscribe(data => {
      this.projects = data;
    });
  }

  getUsers() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  assignUsers() {
    this.projectService.assignUsersToProject(this.assignment).subscribe(response => {
      console.log('Users assigned:', response);
    });
  }
}
