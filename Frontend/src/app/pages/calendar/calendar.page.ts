import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
  standalone:false,
})
export class CalendarPage implements OnInit {
  eventos: any[] = [
    { id: 1, title: 'Evento 1 Observación:', start: '2023-10-01', end: '2023-10-02' },
    { id: 2, title: 'Evento 2 Planteamiento:', start: '2023-10-05', end: '2023-10-06' },
    { id: 3, title: 'Evento 3 lol xd:', start: '2023-10-10', end: '2023-10-12' },
    { id: 4, title: 'Evento 4 Experimentacion:', start: '2023-10-15', end: '2023-10-16' },]
  constructor() { }

  ngOnInit() {
  }

}
