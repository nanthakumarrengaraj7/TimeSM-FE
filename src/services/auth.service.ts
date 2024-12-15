// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient, private router: Router) {}


  login(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/login', data);
  }

  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  isTokenExpired(): boolean {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      return true; // No token means it's expired or not set
    }

    // Decode the token and check the expiration date
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    const expirationDate = decodedToken.exp * 1000;
    return Date.now() > expirationDate; // If current time is greater than token's expiration time
  }

}
