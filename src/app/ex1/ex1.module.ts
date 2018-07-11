import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ex1RoutingModule } from './ex1-routing.module';
import { MasterComponent } from './master/master.component';
import { DetailComponent } from './detail/detail.component';
import { Ex1Component } from './ex1.component';

@NgModule({
  imports: [
    CommonModule,
    Ex1RoutingModule
  ],
  declarations: [MasterComponent, DetailComponent, Ex1Component]
})
export class Ex1Module { }
