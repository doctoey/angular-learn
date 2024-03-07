import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent {

  counter: number = 0;

  value = 0;

  @Input() step:number = 1;
  @Output() numberChange = new EventEmitter<number>();

  // increaseValue(value: string) {
  //   this.value = Number(value) + 1;
  // }

  // decreaseValue(value: string) {
  //   this.value = Number(value) - 1;
  // }

  increaseValue() {
    if (this.counter + this.step <= 100) {
      // กันว่าไม่ให้เกิน 100 บวกยังไงก็ไม่เกิน
      this.counter = this.counter + this.step;
      this.numberChange.emit(this.counter)
    }
  }

  decreaseValue() {
    if (this.counter - this.step >= 0 ) {
      // กันว่าไม่ให้ลงต่ำกว่า 0 ลบยังไงก็ไม่ต่ำกว่า 0
    this.counter = this.counter - this.step;
    this.numberChange.emit(this.counter)
    }
  }
}
