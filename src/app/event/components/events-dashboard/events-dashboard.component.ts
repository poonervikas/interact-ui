import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserService } from 'src/app/core/services/user.service';
import * as fromApp from '../../../store/app.reducer';
import * as AuthActions from '../../../store/auth/auth.actions';

@Component({
  selector: 'app-events-dashboard',
  templateUrl: './events-dashboard.component.html',
  styleUrls: ['./events-dashboard.component.css']
})
export class EventsDashboardComponent implements OnInit {
  constructor(
    private userService: UserService,
    private store:Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.loadCurrentUser();
  }

  loadCurrentUser(){
    this.userService.loadUser().subscribe(data=>{
      this.store.dispatch(new AuthActions.LoadUser(data))
    },error=>{

    })
  }


}
