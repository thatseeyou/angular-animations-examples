import { trigger, transition, style, query, sequence, group, animate, animateChild } from "@angular/animations";

// 매번 {optional:true}를 붙이기 귀찮은 경우에 사용
// optional은 query의 결과로 DOM을 찾지 못 할때 exception이 발생하지 않도록 한다.
// template build 과정에서는 에러가 발생한다.
// const query = (s,a,o={optional:true})=>q(s,a,o);

export const transitionAnimation = trigger('transitionAnimation', [
  transition('master => detail', [
    query(':enter, :leave',
      style({
        position: 'fixed',
        width: '100%'
      }),
      { optional: true }
    ),
    query(':enter',
      style({
        transform: 'translateX(100%)'
      }),
      { optional: true }
    ),
    sequence([
      query(':leave',
        animateChild(),
        { optional: true }
      ),
      group([
        query(':leave',
          [
            style({
              transform: 'translateX(0%)'
            }),
            animate('500ms cubic-bezier(.75,-0.48,.26,1.52)',
              style({
                transform: 'translateX(-100%)'
              })
            )
          ],
          { optional: true }
        ),
        query(':enter',
          [
            style({
              transform: 'translateX(100%)'
            }),
            animate('500ms cubic-bezier(.75,-0.48,.26,1.52)',
              style({
                transform: 'translateX(0%)'
              })
            ),
          ],
          { optional: true }
        ),
      ]),
      query(':enter', animateChild()),
    ])
  ]),
  transition('detail => master', [
    query(':enter, :leave',
      style({
        position: 'fixed',
        width: '100%'
      }),
      { optional: true }
    ),
    query(':enter',
      style({
        transform: 'translateX(-100%)'
      }),
      { optional: true }
    ),
    sequence([
      query(':leave',
        animateChild(),
        { optional: true }
      ),
      group([
        query(':leave',
          [
            style({
              transform: 'translateX(0%)'
            }),
            animate('500ms cubic-bezier(.75,-0.48,.26,1.52)',
              style({
                transform: 'translateX(100%)'
              })
            )
          ],
          { optional: true }
        ),
        query(':enter',
          [
            style({
              transform: 'translateX(-100%)'
            }),
            animate('500ms cubic-bezier(.75,-0.48,.26,1.52)',
              style({
                transform: 'translateX(0%)'
              })
            ),
          ],
          { optional: true }
        ),
      ]),
      query(':enter', animateChild()),
    ])
  ])
]);
