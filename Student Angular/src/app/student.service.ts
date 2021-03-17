import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  constructor(private http:HttpClient) { }

  getStudentList(): Observable<any> {
    return this.http.get(`http://localhost:8181/api/student/`);
  }

  deleteStudent(id: any): Observable<any> {
    return this.http.delete(`http://localhost:8181/api/student/delete/{id}`, { responseType: 'text' });
  }

  createStudent(data: any):Observable<any> {
    return this.http.post(`http://localhost:8181/api/student/create`,data);
  }

}
