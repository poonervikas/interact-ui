import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QnaDashboardComponent } from './qna-dashboard/qna-dashboard.component';

const routes: Routes = [
  {path:'',component:QnaDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QnaRoutingModule { }
