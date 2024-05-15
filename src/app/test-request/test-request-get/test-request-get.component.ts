import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Book } from './test-request-get';

@Component({
  selector: 'app-test-request-get',
  templateUrl: './test-request-get.component.html',
  styleUrls: ['./test-request-get.component.scss'],
})
export class TestRequestGetComponent {
  bookList: Book[] = [];

  //inject the service
  constructor(private http: HttpClient) {}

  //rxjs
  ngOnInit(): void {
    // ทำงานเลยเมื่อ component ถูกสร้างขึ้นมา
    // this.http.get<Book[]>('https://www.anapioficeandfire.com/api/books')
    // .subscribe(response=>{
    //   console.log(response, 'response');
    //   this.bookList = response;
    // });
  }

  //search
  //ทำงานเมื่อมีการค้นหา (กดปุ่ม search)
  searchBookList(name: string) {
    this.http
      .get<Book[]>('https://www.anapioficeandfire.com/api/books?name=' + name)
      .subscribe((response) => {
        console.log(response, 'response');
        this.bookList = response;
      });
  }
}
