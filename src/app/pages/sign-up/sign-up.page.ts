import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  standalone:false,
})
export class SignUpPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['/log-in']);
  }
  goToRutas() {
    this.router.navigate(['/routes-navigations']);
  }

}
