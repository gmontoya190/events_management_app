import { Component } from '@angular/core';



@Component({
  selector: 'events-page'
})
export class Event {
   private eventId: String;
   private isActive: Boolean;
   private name: String;

  constructor() {
    
  }
  getEventId() : String {
    return this.eventId;
  }
  getIsActive() : Boolean {
    return this.isActive;
  }
  getName() : String {
    return this.name;
  }
  setEventId(eventId:string)  {
    this.eventId = eventId;

  }
  setIsActive(isActive: boolean) {
    this.isActive = isActive;

  }
  setName(name:string)  {
    this.name = name;

  }
}