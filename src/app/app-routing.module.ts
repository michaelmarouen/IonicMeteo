import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DayComponent } from './components/day/day.component';
import { WeekComponent } from './components/week/week.component';


const routes: Routes = [
  {path:'day', component: DayComponent},
  {path:':week', component: WeekComponent},      
  {
    path: '',
    redirectTo: 'day',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
