import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http:HttpClient) { 
    console.log('RegisterService creado');
  }

  registerUser(user: Register): Observable<any> {
    return this.http.post<Register>(`${this.apiUrl}/register`, user);
  }

}
