import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Space } from '../../../core/interfaces/space.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  getSpaces(): Observable<Space[]> {
    return this.http.get<Space[]>(`${this.baseUrl}/space`);
  }

  getSpace(id:number): Observable<Space> {
    return this.http.get<Space>(`${this.baseUrl}/space/${id}`);
  }

  postSpace(space:Space): Observable<Space> {
    return this.http.post<Space>(`${this.baseUrl}/space`, space);
  }

  putSpace(space:Space): Observable<any> {
    return this.http.put<Space>(`${this.baseUrl}/space/${space.id}`, space);
  }

  deleteSpace(id:number): Observable<Space> {
    return this.http.delete<Space>(`${this.baseUrl}/space/${id}`);
  }
}
