import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent {
  @Input('evenElement') element: {num: number};
}
