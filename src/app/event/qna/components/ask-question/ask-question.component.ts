import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuestionService } from 'src/app/event/qna/services/question.service';
import { SnackBarUtils } from 'src/assets/SnackBarUtils';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent implements OnInit {
  @Output() questionPosted=new EventEmitter();

  @Input() askQuestionData: any = {
    characterLimit: 160,
    btnText: 'Send'
  }
  @Input() eventId: number;
  askQuestionForm: FormGroup;
  numberOfCharactersLeft = 160;
  numberOfCharactersLeftClass = 'characters-limit-valid'



  askQuestion() {
    this.questionService.postQuestion(this.askQuestionForm.value, this.eventId).subscribe(data => {
        console.log("Question Posted Successfully!!")
        this.snackBar.open((SnackBarUtils.MESSAGE_QUESTION_POSTED_SUCCESS),SnackBarUtils.action,{duration:SnackBarUtils.duration,panelClass:SnackBarUtils.SNACKBAR_SUCCESS_CLASSNAME});

        this.askQuestionForm.setValue({question:''});
        this.questionPosted.emit();
    },
      error => {
        this.snackBar.open((error.error.message || SnackBarUtils.MESSAGE_DEFAULT_ERROR),SnackBarUtils.action,{duration:SnackBarUtils.duration,panelClass:SnackBarUtils.SNACKBAR_ERROR_CLASSNAME});

      })
    console.log(this.askQuestionForm)
  }
  @HostListener('click') check() {
    this.isInputFocus = true
  }

  @HostListener('document:click', ['$event']) check2(event) {
    }
  isInputFocus: boolean = false;

  constructor(
    private elementRef: ElementRef,
    private questionService: QuestionService,
    private snackBar:MatSnackBar
  ) { }

  ngOnInit(): void {
    this.askQuestionForm = new FormGroup(
      { 'question': new FormControl('', [Validators.required, Validators.maxLength(160)]) }
    )

    this.askQuestionForm.valueChanges.subscribe(value => {
      this.numberOfCharactersLeft = this.askQuestionData.characterLimit - value.question.length;
      if (this.numberOfCharactersLeft < 0) {
        this.numberOfCharactersLeftClass = "characters-limit-invalid"
      }
      else {
        this.numberOfCharactersLeftClass = "characters-limit-valid"

      }
    })
  }

  // toggleAskQuestionInputFocus(isFocus: boolean) {
  //   this.isInputFocus = isFocus;
  //   console.log(this.isInputFocus);
  // }

}
