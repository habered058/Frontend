import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../core/models/user.interface copy';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://example.com/api'; // URL de tu backend

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<User> {
    const loginData = { username, password };
    return this.http.post<User>(`${this.baseUrl}/login`, loginData);
  }
}
