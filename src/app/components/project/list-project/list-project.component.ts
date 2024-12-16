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

  projects: any[] = []; // List of all projects
  filteredProjects: any[] = []; // Filtered list based on search and filters
  searchTerm: string = ''; // Search term for project name
  selectedDepartment: string = ''; // Selected department for filtering
  selectedBusinessUnit: string = ''; // Selected business unit for filtering
  departments: string[] = []; // List of departments for the department filter
  businessUnits: string[] = []; // List of business units for the business unit filter

  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit(): void {
    this.getAllProjects();
  }

  // Fetch all projects
  getAllProjects() {
    this.projectService.getAllProjects().subscribe((res: any) => {
      this.projects = res.data;
      this.departments = this.getDepartments(this.projects); // Get unique departments
      this.businessUnits = this.getBusinessUnits(this.projects); // Get unique business units
      this.filteredProjects = this.projects; // Initialize the filtered projects list
    });
  }

  // Get unique departments from the projects
  getDepartments(projects: any[]) {
    const departments = new Set<string>();
    projects.forEach((project) => departments.add(project.department));
    return Array.from(departments);
  }

  // Get unique business units from the projects
  getBusinessUnits(projects: any[]) {
    const businessUnits = new Set<string>();
    projects.forEach((project) => businessUnits.add(project.businessUnit));
    return Array.from(businessUnits);
  }

  // Filter the projects based on project name, department, and business unit
  filterProjects() {
    this.filteredProjects = this.projects.filter((project) => {
      const matchesSearch = this.searchTerm
        ? project.projectName.toLowerCase().includes(this.searchTerm.toLowerCase())
        : true;

      const matchesDepartment = this.selectedDepartment
        ? project.department === this.selectedDepartment
        : true;

      const matchesBusinessUnit = this.selectedBusinessUnit
        ? project.businessUnit === this.selectedBusinessUnit
        : true;

      return matchesSearch && matchesDepartment && matchesBusinessUnit;
    });
  }

  // Navigate to the add project page
  addproject() {
    this.router.navigate(['/project-management/add-project']);
  }

  // Navigate to the assign task page
  assignproject() {
    this.router.navigate(['/project-management/assign-task']);
  }

  // Navigate to the assign users page
  assignUsersToProject() {
    this.router.navigate(['/project-management/assign-users']);
  }

  // Delete a project
  deleteProject(id: any) {
    this.projectService.deleteProjectById(id).subscribe(() => {
      this.getAllProjects(); // Refresh the list after deletion
    });
  }

  // Edit a project
  editProject(id: any) {
    this.router.navigate(['/project-management/edit-dublicate-project/' + id]);
  }

}
