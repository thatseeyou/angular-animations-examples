import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ex2Component } from './ex2.component';
import { QueryComponent } from './query/query.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'query'
  },
  {
    path: '',
    component: Ex2Component,
    children: [
      {
        path: 'query',
        component: QueryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ex2RoutingModule { }
