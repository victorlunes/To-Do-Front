import { Routes } from '@angular/router';
import { NewTaskComponent } from './features/new-task/new-task.component';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'newTask',
    loadComponent: () =>
      import('./features/new-task/new-task.component').then(
        (m) => m.NewTaskComponent
      ),
  },
  {
    path: '',
    redirectTo: './features/home/home.component',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: './features/home/home.component',
  },
];
