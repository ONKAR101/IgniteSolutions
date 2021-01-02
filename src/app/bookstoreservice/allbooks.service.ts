import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
 

@Injectable({
  providedIn: 'root'
})
export class AllbooksService {

  constructor(private http: HttpClient, private router: Router) { }
  BaseUrl = "http://gutendex.com/books/";
  bookData:any;
  bookText:any;

  getBookList(topic:any){
    this.bookData = this.http.get(this.BaseUrl+topic);
    return this.http.get(this.BaseUrl+"?topic="+topic);
  }
  searchBook(searchVal:any){
    return this.http.get(this.BaseUrl+"?search="+searchVal);
  }
  getBookTopic(topic: any) {
    this.bookData = topic;
    this.router.navigate(['/booktype']);
  }
  returnBookTopic(){
    console.log(this.bookData)
    return this.bookData;
  }
  SendBookText(text:any){
    this.bookText = text;
    console.log(this.bookData)
    return this.bookData;
  }
  getBookText(){
    console.log(this.bookText);
    return this.bookText;
  }
  getBookData(text:any){
    return this.http.get(text)
  }
}
