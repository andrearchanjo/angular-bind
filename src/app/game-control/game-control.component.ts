import { Component } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  intervalCreated: any
  numberCount: number = 0

  onStartGame() {
    this.intervalCreated = setInterval(() => {
      this.numberCount++
      console.log(this.numberCount)
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.intervalCreated)
  }
}
