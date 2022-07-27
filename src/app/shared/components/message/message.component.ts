import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  message:string="I am a Test Message"
  expiresIn:number=5;
  type:String="success";
  position:String; 
  show:boolean=false;

  constructor() { }

  ngOnInit(): void {
    this.show=true;
    setTimeout(() => {
      this.show=false
    }, this.expiresIn*1000);
  }


}
