import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarUtils } from 'src/assets/SnackBarUtils';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  @Output() eventCreated=new EventEmitter<number>();
  eventForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private eventService:EventService,
    private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.eventForm = this.fb.group({
      'eventName': ['', [Validators.required]],
      'startTime': ['', Validators.required],
      'expirationTime': ['', Validators.required]
    })
  }

  createEvent() {

    let startTime = new Date(this.eventForm.get('startTime').value).toISOString();
    let expirationTime = new Date(this.eventForm.get('expirationTime').value).toISOString();
    let newEventData={
      eventName: this.eventForm.get('eventName').value,
      startTime: startTime,
      expirationTime: expirationTime
    }
    this.eventService.createEvent(newEventData).subscribe((res:any)=>{
      this.eventCreated.emit(res.eventId);
      this.snackBar.open((SnackBarUtils.MESSAGE_CREATE_EVENT_SUCCESS),SnackBarUtils.action,{duration:SnackBarUtils.duration,panelClass:SnackBarUtils.SNACKBAR_SUCCESS_CLASSNAME});

    },error=>{
      console.log(error)
      })
  }

  closeDialog(){

  }

}
