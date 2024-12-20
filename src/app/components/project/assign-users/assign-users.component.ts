import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../../services/project.service';
import { UserService } from '../../../../services/user.service';
import { Router } from '@angular/router';

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
    userIds: []
  };

  constructor(private projectService: ProjectService, private userService: UserService,private router:Router) { }

  ngOnInit(): void {
    this.getProjects();
    this.getUsers();
  }

  getProjects() {
    this.projectService.getAllProjects().subscribe((res: any) => {
      this.projects = res?.data;
    });
  }

  getUsers() {
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data?.users;
      console.log(this.users);
    });
  }

  assignUsers() {
    this.projectService.assignUsersToProject(this.assignment).subscribe(response => {
      console.log('Users assigned:', response);
    });
  }
  back(){
    this.router.navigate(['/project-management/list-project'])
  }
}
