import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { Register } from 'src/app/models/register';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  standalone: false,
})
export class SignUpPage implements OnInit {

  usuario: Register = {
    nombre_apellido: '',
    rut: '',
    correo: '',
    ubicacion: '',
    establecimiento: '',
    contrasena: '',
    acepta_terminos: false
  };

  constructor(private router: Router,private registerService: RegisterService) {}

  ngOnInit() {}

  registrar() {
    if (
      !this.usuario.nombre_apellido ||
      !this.usuario.rut ||
      !this.usuario.correo ||
      !this.usuario.ubicacion ||
      !this.usuario.establecimiento ||
      !this.usuario.contrasena
    ) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    if (!this.usuario.acepta_terminos) {
      alert('Por favor, acepte los términos y condiciones.');
      return;
    }

    this.registerService.registrarUsuario(this.usuario).subscribe({
      next: (res: any) => {
        console.log('Usuario registrado correctamente', res);
        this.router.navigate(['/routes-navigations']);
      },
      error: (err: any) => {
        console.error('Error al registrar usuario', err);
      }
    });
  }

  goBack() {
    this.router.navigate(['/log-in']);
  }

  goToRutas() {
    this.router.navigate(['/routes-navigations']);
  }
}
