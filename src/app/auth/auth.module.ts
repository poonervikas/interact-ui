import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth/auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    //CoreModule,  //Because we are using services here  //TBD- import in app.module.ts
    ReactiveFormsModule,// here also, otherwise error
    SharedModule
  ]
})
export class AuthModule { }
