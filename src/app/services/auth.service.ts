import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000';
  constructor(private http:HttpClient) { }

  login(user: Login): Observable<any> {
    return this.http.post<Login>(`${this.apiUrl}/api/users/login`, user);
  }

  guardarToken(token: string){
    localStorage.setItem('token', token);
  } 

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  cerrarSesion() {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  obtenerPerfil(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get(`${this.apiUrl}/perfil`, { headers });
  }


  
}
