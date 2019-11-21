import {Time} from '@angular/common';

export  class Events {


   name:string;

  constructor(name: string, eventType: number, eventDate: Date, eventTime: Time, venue: number, equipment: string) {
    this.name = name;
    this.eventType = eventType;
    this.eventDate = eventDate;
    this.eventTime = eventTime;
    this.venue = venue;
    this.equipment = equipment;
  }

  eventType:number;

   eventDate:Date;

   eventTime:Time;

   venue:number;

   equipment:string;

   permissionFile:string

  // constructor(name: string, eventType: bigint, eventDate: Date, eventTime: Time, venue:bigint, equipment: string) {
  //   this.name = name;
  //   this.eventType = eventType;
  //   this.eventDate = eventDate;
  //   this.eventTime = eventTime;
  //   this.venue = venue;
  //   this.equipment = equipment;
  // }

}
