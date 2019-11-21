import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {EventsService} from '../servies/events.service';
import {Asingupinfo} from '../info/asinup-info';
import {Events} from '../info/event-info';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
issucces: boolean;
messeage = '';
  form: any = {};
  eventObj: Events;
  constructor(private create: EventsService) { }

  ngOnInit() {
  }
  onsubmit() {
    console.log(this.form);
this.eventObj = new Events(
  this.form.name,
  this.form.event,
  this.form.date,
  this.form.time,
  this.form.venue,
  this.form.details);

console.log( this.form.name+"this s event create form")
this.create.createevent(this.eventObj).subscribe(dat => {
this.issucces = true;
this.messeage = 'create success full';
}, error => {
this.issucces = false;
this.messeage = 'create failed';
});


}
}
