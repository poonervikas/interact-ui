import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QnaRoutingModule } from './qna-routing.module';
import { QnaDashboardComponent } from './qna-dashboard/qna-dashboard.component';
import { AskQuestionComponent } from './components/ask-question/ask-question.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionComponent } from './components/question/question.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [QnaDashboardComponent, AskQuestionComponent, QuestionsComponent, QuestionComponent],
  imports: [
    CommonModule,
    QnaRoutingModule,
    SharedModule,
    MatButtonToggleModule
  ]
})
export class QnaModule { }
