import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'http://localhost:3000/api/projects'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  // Fetch all projects
  getAllProjects(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  // Add a new project
  addProject(project: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, project);
  }

  // Assign users to a project
  assignUsersToProject(assignment: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/assign-users`, assignment);
  }

  // Assign tasks to a project
  assignTaskToProject(assignment: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/assign-tasks`, assignment);
  }

  // Edit project by ID
  updateProject(projectId: string, updatedData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${projectId}`, updatedData);
  }

  // Fetch a project by its ID
  getProjectById(projectId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${projectId}`);
  }

  deleteProjectById(projectId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${projectId}`);
  }
}
