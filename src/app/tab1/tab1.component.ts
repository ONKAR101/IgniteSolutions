import { Component, OnInit } from '@angular/core';
import {AllbooksService} from '../bookstoreservice/allbooks.service';

import {} from "@angular/common"

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css']
})
export class Tab1Component implements OnInit {

  constructor(private book: AllbooksService) { }
  store:any=[];
  bookTypes:any={};
  ngOnInit(): void {
    this.bookTypes = { 
    "./../../assets/Fiction.svg": 'FICTION', 
    "./../../assets/Philosophy.svg": 'PHILOSOPHY', 
    "./../../assets/Drama.svg": 'DRAMA',
    "./../../assets/History.svg":'HISTORY',
    "./../../assets/Humour.svg":"HUMOUR",
    "./../../assets/Adventure.svg":"ADVENTURE",
    "./../../assets/Politics.svg":"POLITICS"
  };
  }

  data(topic:any){
    this.book.getBookTopic(topic);
  }
}
