import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routes-navigations',
  templateUrl: './routes-navigations.page.html',
  styleUrls: ['./routes-navigations.page.scss'],
  standalone:false,
})
export class RoutesNavigationsPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
