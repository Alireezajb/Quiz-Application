import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuiestionMainComponent } from './quiestion-main/quiestion-main.component';
import { WelcomeMainComponent } from './welcome-main/welcome-main.component';


const routes: Routes = [

  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeMainComponent },
  { path: 'question', component: QuiestionMainComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
