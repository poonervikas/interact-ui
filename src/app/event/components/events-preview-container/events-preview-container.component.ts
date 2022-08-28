import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoDataFound } from 'src/app/core/models/NoDataFound.model';
import { EventService } from 'src/app/core/services/event.service';
import { NoDataFoundUtils } from 'src/assets/NoDataFoundUtils';
import { SnackBarUtils } from 'src/assets/SnackBarUtils';

@Component({
  selector: 'app-events-preview-container',
  templateUrl: './events-preview-container.component.html',
  styleUrls: ['./events-preview-container.component.css']
})
export class EventsPreviewContainerComponent implements OnInit {

  selectedFilter: String = "all"
  filters: any = [
    { value: 'all', viewValue: 'All' },
    { value: 'creator', viewValue: 'Created by Me' },
    { value: 'participant', viewValue: 'Joined as Participant' },
  ];

  events: any = [];  //TBD Make Model for all required entities
  type: String = 'all';
  data: NoDataFound = {
    message: NoDataFoundUtils.MESSAGE_NO_EVENTS_FOUND,
    image_src: '../../assets/images/noevents.png'
  }

  constructor(
    private eventService: EventService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.fetchEvents(this.type);
  }
  
  onFilterChange() {
   this.fetchEvents(this.selectedFilter)
  }
  fetchEvents(type: String) {
    this.eventService.getMyEvents(type).subscribe(data => {
      this.events = data;
      console.log(this.events)
    },
      error => {
        console.log(error);
        this.snackBar.open((error.error.message || SnackBarUtils.MESSAGE_DEFAULT_ERROR), SnackBarUtils.action, { duration: SnackBarUtils.duration, panelClass: SnackBarUtils.MESSAGE_DEFAULT_ERROR });
      })
  }

}
