import { Component, OnInit, HostListener} from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
  standalone:false,
})
export class LogInPage implements OnInit {
  screenWidth: number = window.innerWidth;
  loginForm: FormGroup;
  mensaje = "";

  constructor(private router:Router, private fb:FormBuilder,private authService:AuthService ) { 
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contraseña: ['', [Validators.required]],
      terminos:  [false, [Validators.requiredTrue]]
    });
  }

  ngOnInit() {
    if(this.authService.isAuthenticated()){
      this.router.navigate(['/routes-navigations']);
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const datos: Login = {
        correo: this.loginForm.value.correo,
        contraseña: this.loginForm.value.contraseña
      }
      this.authService.login(datos).subscribe({
        next:(res) => {
          console.log('Inicio de sesión exitoso', res);
          this.authService.guardarToken(res.token);
          this.router.navigate(['/routes-navigations']);
        },
        error: (err) => {
          this.mensaje = err.error.message || 'Error al iniciar sesión';
          console.error('Error al iniciar sesión', this.mensaje);
        }
      })
      
    } else {
      this.loginForm.markAllAsTouched(); // Marca todos los campos como tocados para mostrar errores
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
  }
  
  goToSignUp() {
    this.router.navigate(['/sign-up']);
  }
  goToRutas() {
    this.router.navigate(['/routes-navigations']);
  }


}
