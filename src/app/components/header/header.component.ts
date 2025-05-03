import { Component,  HostListener, Host, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader } from "@ionic/angular/standalone";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone:false,
})
export class HeaderComponent  implements OnInit {
  @Input() title: string = 'Hola mundo';
  screenWidth: number = window.innerWidth;

  constructor(private router:Router) { }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    console.log("se creo el encabezado de manera exitosa")
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
  }

  /*goToHome() {
    this.router.navigate(['/home']);
  }*/
  gotoLogin() {
    this.router.navigate(['/log-in']);
  }
  gotoSignUp() {
    this.router.navigate(['/sign-up']);
  }

  goToNotifications() {
    this.router.navigate(['/notifications']);
  }

  goToCalendar() {
    this.router.navigate(['/calendar']);
  }

  goToRoutes() {
    this.router.navigate(['/routes-navigations']);
  }

}
