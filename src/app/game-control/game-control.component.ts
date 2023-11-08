import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() numCount = new EventEmitter<{num: number}>;
  
  intervalCreated: any
  numberCount: number = 0

  onStartGame() {
    this.intervalCreated = setInterval(() => {
      this.numberCount++

      console.log(this.numberCount)
      
      this.numCount.emit({
        num: this.numberCount
      })
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.intervalCreated)
  }
}
