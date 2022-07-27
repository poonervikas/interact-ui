import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QnaRoutingModule } from './qna-routing.module';
import { QnaDashboardComponent } from './qna-dashboard/qna-dashboard.component';


@NgModule({
  declarations: [QnaDashboardComponent],
  imports: [
    CommonModule,
    QnaRoutingModule
  ]
})
export class QnaModule { }
