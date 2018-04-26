import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './speichern/home.component';
import { AboutComponent } from './schreiben/about.component';
const routes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path: 'about/:id',
  component: AboutComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
