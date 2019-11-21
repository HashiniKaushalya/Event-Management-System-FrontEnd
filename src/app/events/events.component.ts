import { Component, OnInit } from '@angular/core';
import {EventsService} from '../servies/events.service';
import {Event} from '@angular/router';
import {Events} from '../info/event-info';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private showevent: EventsService) { }
events: Events[];

  ngOnInit() {
  this.show();

  }

  show() {
    this.showevent.allevents().subscribe(
      data => {
        this.events = data;
        console.log(data);
      }, error1 => {
        console.log(error1);
      }
    );
  }



}
