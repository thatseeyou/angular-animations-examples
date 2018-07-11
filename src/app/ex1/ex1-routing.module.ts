import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ex1Component } from './ex1.component';
import { MasterComponent } from './master/master.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  // ex1인 경우에는 ex1/master로 redirect
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'master'
  },
  {
    path: '',
    component: Ex1Component,
    children: [
      {
        path: 'master',
        component: MasterComponent
      },
      {
        path: 'detail',
        component: DetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ex1RoutingModule { }
