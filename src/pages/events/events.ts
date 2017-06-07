  import { Component } from '@angular/core';
  import { Event } from '../../model/event';
  import { EventsService } from '../../service/event_service';


  @Component({
    selector: 'events-page',
    templateUrl: 'events.html'
  })
  export class EventsPage {
     private events: Array<Event>;
     private service: EventsService;


    constructor() {
      let event1 = new Event();
      this.service = new EventsService();
      event1 = this.service.fromJSON();
      this.events = [
      event1,
      event1
      ]
    }
  }