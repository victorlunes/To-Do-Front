import { Routes } from '@angular/router';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'newTask', component: NewTaskComponent },
    { path: '**', redirectTo: '' }
];
