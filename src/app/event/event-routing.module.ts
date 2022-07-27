import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from './components/event/event.component';
import { EventsDashboardComponent } from './components/events-dashboard/events-dashboard.component';
import { EventsPreviewContainerComponent } from './components/events-preview-container/events-preview-container.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { 
    path: 'events', 
    component: EventsDashboardComponent,
    children:[
      {
        path:'myEvents',
        component:EventsPreviewContainerComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: ':eventId',  //at last because search won't match then 
        component: EventComponent,
        children:[
          { 
            path:'qna',
            loadChildren: () => import('./qna/qna.module').then(m => m.QnaModule)
          },
          { 
            path:'polls',
            loadChildren: () => import('./polls/polls.module').then(m => m.PollsModule)
          },
          { 
            path:'surveys',
            loadChildren: () => import('./survey/survey.module').then(m => m.SurveyModule)
          }
        ]
      },
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
