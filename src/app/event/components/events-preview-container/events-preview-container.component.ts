import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventService } from 'src/app/core/services/event.service';
import { SnackBarUtils } from 'src/assets/SnackBarUtils';

@Component({
  selector: 'app-events-preview-container',
  templateUrl: './events-preview-container.component.html',
  styleUrls: ['./events-preview-container.component.css']
})
export class EventsPreviewContainerComponent implements OnInit {

  events: any;  //TBD Make Model for all required entities
  type: String = 'all';

  constructor(
    private eventService: EventService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.fetchEvents(this.type);
  }
  fetchEvents(type: String) {
    this.eventService.getMyEvents(type).subscribe(data => {
      this.events = data;
      console.log(this.events)
    },
      error => {
        console.log(error);
        this.snackBar.open((error.error.message || SnackBarUtils.MESSAGE_DEFAULT_ERROR), SnackBarUtils.action, { duration: SnackBarUtils.duration ,panelClass:SnackBarUtils.MESSAGE_DEFAULT_ERROR});
      })
  }

}
