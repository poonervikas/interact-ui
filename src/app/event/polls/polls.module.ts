import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PollsRoutingModule } from './polls-routing.module';
import { PollsDashboardComponent } from './polls-dashboard/polls-dashboard.component';


@NgModule({
  declarations: [PollsDashboardComponent],
  imports: [
    CommonModule,
    PollsRoutingModule
  ]
})
export class PollsModule { }
