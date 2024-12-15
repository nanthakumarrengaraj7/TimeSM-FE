// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeLogService {
  private apiUrl = 'http://localhost:3000/api/timelog';  // Example API endpoint

  constructor(private http: HttpClient) {}

  getLogs(): Observable<any> {
    return this.http.get<any>(this.apiUrl+'/loglist');
  }

  addLog(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/newlog', data);
  }

  getUseLog(id: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/`+'loglist/'+id);
  }
}
