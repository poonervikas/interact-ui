import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private http:HttpClient) { }

  getMyEvents(type:String){
    return this.http.get(environment.api_url+`/event/myEvents?type=${type}`);
  }

  searchAndJoinEvent(eventId:number){
    return this.http.put(environment.api_url+`/event/${eventId}/join`,{});  //body is reequired for PUT eventhough we don't need it at backend
  }

  createEvent(eventData){
    return this.http.post(environment.api_url+`/event/create`,eventData);
  }
  

}
