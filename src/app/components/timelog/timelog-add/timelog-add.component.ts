import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TimeLogService } from '../../../../services/timelog.service';
import { ProjectService } from '../../../../services/project.service';

@Component({
  selector: 'app-timelog-add',
  standalone: false,
  templateUrl: './timelog-add.component.html',
  styleUrl: './timelog-add.component.css'
})
export class TimelogAddComponent {
  userData: any;
  logData = {
    username: '',
    userid: '',
    date: '',
    projectname: '',
    task: '',
    hours: '',
    taskstatus: ''
  };
  projects: any;
  projectList :any[] = [];

  constructor(private timeLogService: TimeLogService, private router: Router, private projectService: ProjectService) {
    const userdata = localStorage.getItem('user');
    if(userdata) {
      this.userData = JSON.parse(userdata);
    }
    this.getAllProjects();
  }

  getAllProjects() {
    this.projectService.getAllProjects().subscribe((res: any) => {
      this.projects = res.data;
      this.projects.forEach((element:any) => {
        if(!this.projectList.includes(element?.projectName)){
          this.projectList.push(element.department);
        }
      });
    });
  }

  addLog() {
    this.logData.username = this.userData?.username;
    this.logData.userid = this.userData?._id;
    this.timeLogService.addLog(this.logData).subscribe(() => {
      this.router.navigate(['/timelog/timelog-list']);
    });
  }

  back(){
    this.router.navigate(['/timelog/timelog-list'])
  }

  onDateChange(event: any) {
    this.logData.date = event.value;
    console.log('Selected Date:', this.logData.date);
  }
}
