import { Component, OnInit } from '@angular/core';
import { transitionAnimation } from '../core/transition-animation';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.scss'],
  animations: [
    transitionAnimation
  ]
})
export class Ex1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
