  import { Injectable } from '@angular/core';
  import { Event } from '../model/event';

  export  interface EventJSON {
    eventId:   string;
    isActive:     Boolean;
    name: string;
  }
  @Injectable()
  export class EventsService {

    constructor(){

    }

   fromJSON(): Event {
     var json = require('../files/event.json');
     let event = Object.create(Event.prototype);
     return Object.assign(event, json, {
        }); 
    }
 }