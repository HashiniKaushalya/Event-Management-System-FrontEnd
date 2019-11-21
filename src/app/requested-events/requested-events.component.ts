import { Component, OnInit } from '@angular/core';
import {Events} from '../info/event-info';
import {EventsService} from '../servies/events.service';
import {Aprovetheevents} from '../info/aprove-info';

@Component({
  selector: 'app-requested-events',
  templateUrl: './requested-events.component.html',
  styleUrls: ['./requested-events.component.css']
})
export class RequestedEventsComponent implements OnInit {
  constructor(private showevent: EventsService) {
  }

  events: Events[];
  forabrove: Aprovetheevents;
  error

  ngOnInit() {
    this.show();
  }

  show() {
    this.showevent.allevents().subscribe(
      (data: Events[]) => {
        console.log(data);
        this.events = data;
      }, error1 => {

      }
    );
  }

  abrove(id) {
    this.forabrove = new Aprovetheevents(id, 'approved');
  
    this.showevent.approveEvent(this.forabrove).subscribe(data => {
      },
      error => {
      }
    );


  }
}
