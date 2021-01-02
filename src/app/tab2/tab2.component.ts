import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
declare var $: any;
import Swal from 'sweetalert2';

import { BookTextComponent } from '../modals/book-text/book-text.component';
import { AllbooksService } from '../bookstoreservice/allbooks.service';


@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.css']
})
export class Tab2Component implements OnInit {

  constructor(private book: AllbooksService, private router: Router, private dialog: MatDialog) { }

  topicTitle: any
  Books: any;
  BookRes: any;
  ngOnInit(): void {

    this.topicTitle = this.book.returnBookTopic();
    if (this.topicTitle == undefined) {
      let topic = localStorage.getItem("topic");
      this.topicTitle = topic;
      if (topic == null) {
        this.router.navigate(['/']);
      } else {
        this.AllBooks();
      }
    }else{
      this.AllBooks();
    }
  }

  AllBooks(){
    this.book.getBookList(this.topicTitle)
    .subscribe(d => {
      this.BookRes = d;
      this.Books = this.BookRes.results;
      console.log(this.Books.results)
    });
  }
  Back() {
    localStorage.removeItem('topic');
    this.router.navigate(['/'])
  }

  searchBooks(term: string) {
    console.log(term)
    this.book.searchBook(term)
      .subscribe(d => {
        this.BookRes = d;
        this.Books = this.BookRes.results;
        console.log(this.Books);
      });
  }

  seePreview(a: any) {
    console.log(a.formats)
    let bookType;
    for (const key in a.formats) {
      var ext = a.formats[key].split('.').pop()
      if (ext == "htm" || ext == "html") {
        console.log(key)
        bookType = ext;
        this.book.SendBookText(a.formats[key]);
        this.dialog.open(BookTextComponent)
      }
    }
    if (bookType == undefined)
      Swal.fire('Preview Not Available!')
  }

}
