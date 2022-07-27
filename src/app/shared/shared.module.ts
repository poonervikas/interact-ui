import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MessageComponent } from './components/message/message.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, MessageComponent],
  imports: [
    CommonModule, 
    RouterModule,
    MatSnackBarModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    RouterModule,
    MatSnackBarModule   
  ]
})
export class SharedModule { }
