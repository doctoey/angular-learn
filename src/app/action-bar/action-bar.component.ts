import { Component } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent {

  counter: number = 0;

  value = 0;

  // increaseValue(value: string) {
  //   this.value = Number(value) + 1;
  // }

  // decreaseValue(value: string) {
  //   this.value = Number(value) - 1;
  // }

  increaseValue() {
    this.counter++
  }

  decreaseValue() {
    this.counter--
  }

}
