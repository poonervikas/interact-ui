import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RouteButtonData } from 'src/app/core/models/RouteButtonData.model';
import { EventService } from 'src/app/event/services/event.service';
import { SnackBarUtils } from 'src/assets/SnackBarUtils';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  routeButtonData:RouteButtonData={
    text:'Go to Events',
    link:'/events/myEvents'
  }

  constructor(
    private eventService:EventService,
    private snackBar:MatSnackBar,
    private router:Router
  ) { }

  searchForm = new FormGroup(
    {
      eventId: new FormControl('', [Validators.required])//TBD add numbers validator
    }
  )

  ngOnInit(): void {
  }

  search(){
    console.log(this.searchForm.value)
    this.eventService.searchAndJoinEvent(this.searchForm.value.eventId).subscribe(
      (data:any)=>{
          console.log(data);
          //navigate to /events/{eventId}/qna
          this.router.navigate(['/events',data.eventId,'qna'])
      },
      error=>{
        this.snackBar.open((error.error.message || SnackBarUtils.MESSAGE_DEFAULT_ERROR),SnackBarUtils.action,{duration:SnackBarUtils.duration,panelClass:SnackBarUtils.SNACKBAR_ERROR_CLASSNAME});
      }
    )

  }

}
