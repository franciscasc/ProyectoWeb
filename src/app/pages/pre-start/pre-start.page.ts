import { Component, OnInit } from '@angular/core';
import { SharedModule } from "../../components/shared/shared.module";
import { Router } from '@angular/router';

@Component({
  selector: 'app-pre-start',
  templateUrl: './pre-start.page.html',
  styleUrls: ['./pre-start.page.scss'],
  standalone:false,
})
export class PreStartPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  gotoLogin() {
    this.router.navigate(['/log-in']);
  }
  gotoSignUp() {
    this.router.navigate(['/sign-up']);
  }

}
