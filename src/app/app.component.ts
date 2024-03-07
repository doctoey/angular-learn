import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-learner';
  sleeper = 'doctoey'
  newtitle = ''
  newsleeper = ''
  name = 'toeytoeytoey'

  // สร้าง function ชื่อ changeTitle
  changeTitle() {
    this.newtitle = 'Newtitle'
  }

  // สร้าง function ชื่อ changeSleeper
  changeSleeper() {
    this.newsleeper = 'toeyja'
  }

  changenametosakura(name : string) {
    this.name = name
  }
}
