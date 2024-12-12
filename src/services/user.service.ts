// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/users';  // Example API endpoint

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  addUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/add', user);
  }

  updateUser(user: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/edit/${user._id}`, user);
  }

  deleteUser(userId: any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/`+'delete/'+userId);
  }

  getUser(userId: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/`+'findone/'+userId);
  }
}
