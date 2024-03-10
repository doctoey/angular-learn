import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'angular-learner';
  // sleeper = 'doctoey'
  // newtitle = ''
  // newsleeper = ''
  // name = 'toeytoeytoey'

  // // สร้าง function ชื่อ changeTitle
  // changeTitle() {
  //   this.newtitle = 'Newtitle'
  // }

  // // สร้าง function ชื่อ changeSleeper
  // changeSleeper() {
  //   this.newsleeper = 'toeyja'
  // }

  // changenametosakura(name : string) {
  //   this.name = name
  // }


  value = 0;

  calbuffet(value: string) {
    // this.value = value

    const price = Number(value)
    this.value = (price*3)/4
  }

  testClick() {
    console.log("test click");
  }

  testnumberChange(value: number) {
    console.log("test number change : ", value);
  }

  appMinLabel = 'MyappMinLabel';
  appMaxLabel = 'MyappMaxLabel';

  doAppMinChange(value: number) {
    console.log("doAppMinChange : ", value);
  }
  
  doAppMaxChange(value: number) {
    console.log("doAppMaxChange : ", value);
  }  



  squareHeight = 100;
  squareWidth = 200;


  appCounter = 20;

}
