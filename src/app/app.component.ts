import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenElements = [{}]
  oddElements = [{}]

  onNumberAdded(numberData: {num: number}) {
    console.log(numberData);
    if (numberData.num % 2 !== 0) {
      console.log(this.oddElements)

      this.oddElements.push({
        num: numberData.num
      })
    } else {
      console.log(this.evenElements)

      this.evenElements.push({
        num: numberData.num
      })
    }
  }
}
