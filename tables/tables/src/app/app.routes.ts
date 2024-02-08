import { Routes } from '@angular/router';
import { WrapPageComponent } from './core/components/wrap-page/wrap-page.component';
import { BookComponent } from './pages/book/book.component';
import { EventsComponent } from './pages/events/events.component';

export const routes: Routes = [
    {    
        path: '',
        component: WrapPageComponent,
        children: [
          {
            path: 'book',
            pathMatch: 'full',
            component: BookComponent
          },
          {
            path: 'book-events',
            pathMatch: 'full',
            component: EventsComponent
          },
          {
            path: '**',
            redirectTo: 'book',
          },
        ]
      }
];
