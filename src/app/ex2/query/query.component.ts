import { Component, OnInit } from '@angular/core';
import { trigger, transition, query, animate, style, state, animateChild } from '@angular/animations';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss'],
  animations: [
    trigger('queryAnimation', [
      //
      // state()는 해당 state가 되었을 때의 최종적으로 적용되면 유지가 된다. inline style로 적용이 된다.
      state('clockwise',
        style({
          transform: 'rotate(180deg)'
        })
      ),
      transition('* => clockwise', [
        // 아래의 2개의 query는 기본값인 sequence()로 묶은 것처럼 순서대로 수행된다.
        // 병렬로 수행하기를 원한다면 group()으로 묶어준다.

        // query는 trigger가 적용된 DOM의 자식을 querySelector()처럼 찾아서 animation을 적용한다.
        // :self는 자식이 아닌 자신을 선택한다.
        // 자식 DOM에 animation을 적용할 수는 있지만 state()를 사용하는 것처럼 animation 종료 후에 속성을 유지할 수 없다.
        // 이럴 경우에 자식도 별도의 trigger를 지정하면 된다. (다음 query 참조)
        query(':self, .clockwise', [
          // .clockwise에 대한 transform은 animation이 끝나면 풀리게 된다.
          animate(1000,
            style({
              transform: 'rotate(90deg)'
            })
          ),
          animate(1000,
            style({
              transform: 'rotate(180deg)'
            })
          )
        ]),
        // 특정 trigger가 적용된 자식 DOM을 찾을 수도 있다.
        // animateChild는 그렇게 찾은 DOM의 animation을 수행하라는 명령이다.
        query('@nestedAnimation', animateChild())
      ]),
      transition('* => init', [
        query(':self, .counterclockwise',
          animate(1000,
            style({
              transform: 'rotate(0)'
            })
          )
        )
      ])
    ]),
    trigger('nestedAnimation', [
      // animation이 끝나더라도 유지하기 위해 state()를 이용한다.
      state('clockwise',
        style({
          transform: 'rotate(180deg)'
        })
      ),
      transition('* => clockwise', [
        animate(1000,
          style({
            transform: 'rotate(180deg)'
          })
        )
      ])
    ])
  ]
})
export class QueryComponent implements OnInit {
  state = 'init';

  constructor() { }

  ngOnInit() {
  }

  onRotate() {
    this.state = 'clockwise';
  }

  onInit() {
    this.state = 'init';
  }
}
