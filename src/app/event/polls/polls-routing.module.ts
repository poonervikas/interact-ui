import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PollsDashboardComponent } from './polls-dashboard/polls-dashboard.component';

const routes: Routes = [
  { path: '', component: PollsDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PollsRoutingModule { }
