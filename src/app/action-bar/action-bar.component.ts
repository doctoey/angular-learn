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
    if (this.counter + 1 < 10) {
      // กันว่าไม่ให้เกิน 10 บวกยังไงก็ไม่เกิน
      this.counter++;
    }
  }

  decreaseValue() {
    if (this.counter-1 >= 0 ) {
      // กันว่าไม่ให้ลงต่ำกว่า 0 ลบยังไงก็ไม่ต่ำกว่า 0
    this.counter--;
    }
  }
}
