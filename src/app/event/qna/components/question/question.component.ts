import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { QuestionService } from 'src/app/core/services/question.service';
import * as fromApp from '../../../../store/app.reducer';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question: any;
  isAlreadyLiked: boolean; //for switching classes of question_action_container

  constructor(
    private questionService: QuestionService,
    private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.isAlreadyLiked = this.checkIfAlreadyLiked();
    console.log(this.question, this.isAlreadyLiked)
  }
  like_unlikeQuestion() {
    var questionId = this.question.questionId;
    // var isAlreadyLiked=this.checkIfAlreadyLiked();
    if (this.isAlreadyLiked) {
      // call unlikeQuestion service 
      this.questionService.unlikeQuestion(questionId).subscribe(
        data => {

        }, error => {
          //smthng went wrong
        }
      )
    }
    else {
      //call likeQuestion service
      this.questionService.likeQuestion(questionId).subscribe(
        data=>{

        },error=>{
          
        }
      )

    }

  }

  checkIfAlreadyLiked(): boolean {
    var currentUser;
    this.store.select('auth').subscribe(data => {
      currentUser = data.user;
    }, error => {

    })
    var questionId = this.question.questionId;
    //loop over likes array and check if question already liked
    var index = this.question.likes.findIndex(user => user.emailId == currentUser.emailId)
    console.log("index", index)
    if (index == -1) {
      return false;
    }
    return true;
  }

}
