import { Component, OnInit } from '@angular/core';
import { NoDataFound } from '../core/models/NoDataFound.model';
import { RouteButtonData } from '../core/models/RouteButtonData.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  routeButtonData:RouteButtonData={
    text:"Get Started",
    link:'/login'
  }

  data:NoDataFound={
    message:"There are no questions in this event as of now",
    image_src:'../../assets/nopolls.svg'
  }

  constructor() { }

  ngOnInit(): void { 
  }  

}
