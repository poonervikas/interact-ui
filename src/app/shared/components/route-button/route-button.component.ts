import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteButtonData } from 'src/app/core/models/RouteButtonData.model';

@Component({
  selector: 'app-route-button',
  templateUrl: './route-button.component.html',
  styleUrls: ['./route-button.component.css']
})
export class RouteButtonComponent implements OnInit {

  @Input() data: RouteButtonData

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  navigate() {
    this.router.navigateByUrl(this.data.link);

  }

}
