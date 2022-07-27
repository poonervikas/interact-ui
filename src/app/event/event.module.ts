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



@NgModule({
  declarations: [EventsDashboardComponent, UtilityNavbarComponent, EventPreviewComponent, SearchComponent, EventsPreviewContainerComponent, EventComponent],
  imports: [
    CommonModule,
    EventRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MatTabsModule
  ]
})
export class EventModule { }
