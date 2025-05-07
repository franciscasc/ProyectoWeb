import { Component, OnInit, HostListener} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
  standalone:false,
})
export class LogInPage implements OnInit {
  screenWidth: number = window.innerWidth;

  constructor(private router:Router) { }

  ngOnInit() {
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
