import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
  standalone:false,
})
export class NotificationsPage implements OnInit {
  
  constructor() { }
  

  ngOnInit() {
  }
  PlaceholderNotifications = [
    {
      date: 'Mar., 29 de abril',
      notifications: Array(13).fill({ title: 'List item', icon: 'person-circle-outline' })
    },
    {
      date: 'Mié., 30 de abril',
      notifications: Array(12).fill({ title: 'List item', icon: 'person-circle-outline' })
    },
    {
      date: 'Jue., 1 de mayo',
      notifications: Array(8).fill({ title: 'List item', icon: 'person-circle-outline' })
    }
  ];
 


}
