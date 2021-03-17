import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http:HttpClient) { }

  login(data: any):Observable<any> {
    //console.log("Server: ",data);
    return this.http.post(`${baseUrl}login/`,data);
  }
}
