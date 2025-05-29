import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { Register } from 'src/app/models/register';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  standalone:false,
})
export class SignUpPage  {

  registerForm: FormGroup;

  constructor(private router:Router,private fb: FormBuilder,private serviceRegister:RegisterService) { 
    this.registerForm = this.fb.group({
      nombre_apellido:  ['', [Validators.required]],
      rut:  ['', [Validators.required]],
      correo:  ['', [Validators.required, Validators.email]],
      ubicacion:  ['', [Validators.required]],
      establecimiento:  ['', [Validators.required]],
      contraseña:  ['', [Validators.required, Validators.minLength(6)]],
      confirmarContraseña:  ['', [Validators.required]],
      terminos:  [false, [Validators.requiredTrue]]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {//ojo
    return form.get('contraseña')?.value === form.get('confirmarContraseña')?.value ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const datos: Register = { 
        nombre_apellido: this.registerForm.value.nombre_apellido,
        rut: this.registerForm.value.rut,
        correo: this.registerForm.value.correo,
        ubicacion: this.registerForm.value.ubicacion,
        establecimiento: this.registerForm.value.establecimiento,
        contraseña: this.registerForm.value.contraseña,
        acepta_terminos: this.registerForm.value.terminos // Convertir a 1 o 0

      };
      // Eliminar el campo de términos antes de enviar
      this.serviceRegister.registerUser(datos).subscribe({
        next: (res) => {
          console.log('Registro exitoso', res);
          this.router.navigate(['/log-in']);
        },
        error: (err) => {
          console.error('Error al registrar usuario', err.error?.message || err.message);
        }
      });
      console.log('Datos del formulario:', datos);

    }else{
      this.registerForm.markAllAsTouched(); // Marca todos los campos como tocados para mostrar errores
    } 
    
    
  }
  goBack() {
    this.router.navigate(['/log-in']);
  }
  /*goToRutas() {
    this.router.navigate(['/routes-navigations']);
  } esta cosa ya no sirve*/

}
