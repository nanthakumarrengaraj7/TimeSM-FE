import { Component } from '@angular/core';
import { ProjectService } from '../../../../services/project.service';

@Component({
  selector: 'app-search-project',
  standalone: false,
  templateUrl: './search-project.component.html',
  styleUrl: './search-project.component.css'
})
export class SearchProjectComponent {

  searchTerm: string = '';
  projects: any[] = [];

  constructor(private projectService: ProjectService) {}

  searchProjects() {
    if (this.searchTerm.trim()) {
      this.projectService.getAllProjects().subscribe((data:any) => {
        this.projects = data.filter((project:any) => project.projectName.toLowerCase().includes(this.searchTerm.toLowerCase()));
      });
    } else {
      this.projects = [];
    }
  }
}
