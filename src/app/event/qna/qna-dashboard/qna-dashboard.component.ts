import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/event/qna/services/question.service';

@Component({
  selector: 'app-qna-dashboard',
  templateUrl: './qna-dashboard.component.html',
  styleUrls: ['./qna-dashboard.component.css']
})
export class QnaDashboardComponent implements OnInit {

  eventId: number;
  questionFilter:string='postedAt';
  questions:any

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService
  ) { }

  ngOnInit(): void {
    this.eventId = this.route.parent.parent.snapshot.params['eventId'];
    this.fetchQuestions(this.questionFilter);
  }

  fetchQuestions(filter:string) {
    this.questionService.fetchAllQuestionsOfEvent(this.eventId,this.questionFilter).subscribe(data => {
      console.log(data);
      this.questions=data;
    },
      error => {
        console.log(error)
      })
  }
  onQuestionFilterChange(){
   this.fetchQuestions(this.questionFilter)
  }
  reloadQuestions(){
    this.fetchQuestions(this.questionFilter);
  }

}
