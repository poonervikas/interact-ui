import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MessageComponent } from './components/message/message.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NoDataFoundComponent } from './components/no-data-found/no-data-found.component';
import { RouteButtonComponent } from './components/route-button/route-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextareaAutoresizeDirective } from './directives/textarea-autoresize.directive';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, MessageComponent, NoDataFoundComponent, RouteButtonComponent, TextareaAutoresizeDirective],
  imports: [
    CommonModule, 
    RouterModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    NoDataFoundComponent,
    RouterModule,
    MatSnackBarModule,
    RouteButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    TextareaAutoresizeDirective  ]
})
export class SharedModule { }
