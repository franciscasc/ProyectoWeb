import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'http://localhost:3000/api/users/register'

  constructor(private http:HttpClient) { }

  registrarUsuario(usuario: Register): Observable<any> {
    return this.http.post<any>(this.apiUrl, usuario);
  }
}
