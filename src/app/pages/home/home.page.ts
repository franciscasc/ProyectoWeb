import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone:false,
})
export class HomePage implements OnInit {
  screenWidth: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
  }
  constructor(private router:Router, private authService: AuthService) { }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/log-in']);
    }
  
  }

  /*goToLogIn(){
    this.router.navigate(['/log-in']);
  }*/

  logout() {
    this.authService.cerrarSesion();
    this.router.navigate(['/log-in']);
  }


}
