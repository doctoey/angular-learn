import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Book } from './test-request-get';

@Component({
  selector: 'app-test-request-get',
  templateUrl: './test-request-get.component.html',
  styleUrls: ['./test-request-get.component.scss']
})
export class TestRequestGetComponent {

  bookList: Book[] = [];

  //inject the service
  constructor(private http: HttpClient) { }

  //rxjs
  ngOnInit(): void {
    this.http.get<Book[]>('https://www.anapioficeandfire.com/api/books')
    .subscribe(response=>{
      console.log(response, 'response');
      this.bookList = response;
    })
  }
}
