import { Component, OnInit ,HostListener} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone:false,
})
export class FooterComponent  implements OnInit {
  screenWidth: number = window.innerWidth;
  constructor(private router:Router) { }

  ngOnInit() {}
  @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      this.screenWidth = event.target.innerWidth;
      console.log("se creo el pie de pagina de manera exitosa")
    }

  goToHome() {
    this.router.navigate(['/home']);
  }
  gotoLogin() {
    this.router.navigate(['/log-in']);
  }
  gotoSignUp() {
    this.router.navigate(['/sign-up']);
  }

}
