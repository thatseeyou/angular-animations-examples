import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ex2RoutingModule } from './ex2-routing.module';
import { Ex2Component } from './ex2.component';
import { QueryComponent } from './query/query.component';

@NgModule({
  imports: [
    CommonModule,
    Ex2RoutingModule
  ],
  declarations: [Ex2Component, QueryComponent]
})
export class Ex2Module { }
