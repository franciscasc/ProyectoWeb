import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router:Router) { }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
  
  }

  goToLogIn(){
    this.router.navigate(['/log-in']);
  }


}
