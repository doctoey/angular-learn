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


  activate: boolean = false;


  customerList: string[] = ['toey', 'toeyja', 'toeytoey', 'toeytoeytoey'];

  //push คือการเพิ่มข้อมูลไปที่ตำแหน่งสุดท้ายของ array
  pushCustomer() {
    this.customerList.push('toey'+(this.customerList.length+1))
  }

  //unshift คือการเพิ่มข้อมูลไปที่ตำแหน่งแรกของ array
  unshiftCustomer() {
    this.customerList.unshift('toey'+(this.customerList.length+1))
  }

  //splice เพิ่มข้อมูลไปที่ตำแหน่งที่เราต้องการ remove นั่นแหละ
  spliceCustomer(index : number) {
    this.customerList.splice(index, 1)
  }
  //splice(param1, param2, param3)
  //param1 คือตำแหน่งที่เราต้องการจะเพิ่มข้อมูล
  //param2 คือจำนวนข้อมูลที่เราต้องการจะลบออก
  //param3 คือข้อมูลที่เราต้องการจะเพิ่มเข้าไป

  date1 = new Date();

  products: { name: string, category: string }[] = [
    {
      name: 'toey',
      category: 'toeyja',
    },
    {
      name: 'toeytoey',
      category: 'toeytoeytoey',
    },
    {
      name: 'toeytoeytoey',
      category: 'toeytoeytoeytoey',
    },
    {
      name: 'toeytoeytoeytoey',
      category: 'toeytoeytoeytoeytoey',
    },
  ];



}
