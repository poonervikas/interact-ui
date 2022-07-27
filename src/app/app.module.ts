import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { EventModule } from './event/event.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './core/interceptors/http-token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    ReactiveFormsModule,//reactive Forms
    CommonModule,
    CoreModule, //?TBD why to import this, if providedIn:'root'
    EventModule, BrowserAnimationsModule  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpTokenInterceptor,
      multi:true   //beacuse we can have multiple interceptors within our application
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
