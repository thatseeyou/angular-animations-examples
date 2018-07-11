import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'ex1'
  },
  {
    path: 'ex1',
    loadChildren: './ex1/ex1.module#Ex1Module'
  },
  {
    path: 'ex2',
    loadChildren: './ex2/ex2.module#Ex2Module'
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
