import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionService } from 'src/app/core/services/question.service';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent implements OnInit {

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
        this.askQuestionForm.setValue({question:''})
    },
      error => {
        console.log("Error occured")

      })
    console.log(this.askQuestionForm)
  }
  @HostListener('click') check() {
    this.isInputFocus = true
    // console.log("IIIIIIIIIIIIIIIINNNNNNNNNNNNNNNNNNN")
    // console.log(this.elementRef);
  }

  @HostListener('document:click', ['$event']) check2(event) {
    // console.log(event)
    // this.isInputFocus = false
    // console.log("OOOOOOOOOOOOOOOUTTTTTTTTTTTTTTT")
    // console.log(this.elementRef);


  }
  isInputFocus: boolean = false;

  constructor(
    private elementRef: ElementRef,
    private questionService: QuestionService
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
