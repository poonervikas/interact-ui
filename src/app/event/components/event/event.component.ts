import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor() { }
  links = [
    { link: 'qna', label: "QnA", disabled: false, icon: 'question_answer' },
    { link: 'polls', label: "Polls", disabled: false, icon: 'poll' },
    { link: 'surveys', label: "Surveys", disabled: true, icon: 'trending_up' }];

  activeLink = this.links[0].link;
  ngOnInit(): void { 
  }

}
