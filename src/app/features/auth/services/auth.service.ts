import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../core/models/user.interface copy';
import { Auth } from '../../../core/models/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  login(loginData:Auth): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/login`, loginData);
  }
}
