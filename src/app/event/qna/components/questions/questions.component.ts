import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  @Input() questions:any;
  @Output() liked_unliked_question=new EventEmitter();

  constructor() { }

  ngOnInit(): void { 
  }

  reloadQuestions(){
    this.liked_unliked_question.emit();
  }

}
