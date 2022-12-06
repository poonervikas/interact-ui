import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventsDashboardComponent } from './components/events-dashboard/events-dashboard.component';
import { UtilityNavbarComponent } from './components/utility-navbar/utility-navbar.component';
import { EventPreviewComponent } from './components/event-preview/event-preview.component';
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EventsPreviewContainerComponent } from './components/events-preview-container/events-preview-container.component';
import { SharedModule } from '../shared/shared.module';
import { EventComponent } from './components/event/event.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { CreateEventComponent } from './components/create-event/create-event.component';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [EventsDashboardComponent, UtilityNavbarComponent, EventPreviewComponent, SearchComponent, EventsPreviewContainerComponent, EventComponent, CreateEventComponent],
  imports: [
    CommonModule,
    EventRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule
  ]
})
export class EventModule { }
