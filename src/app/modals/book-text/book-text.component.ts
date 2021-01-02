import { Component, OnInit } from '@angular/core';
import {AllbooksService} from '../../bookstoreservice/allbooks.service';
import {ViewChild, ElementRef, Renderer2} from '@angular/core';




@Component({
  selector: 'app-book-text',
  templateUrl: './book-text.component.html',
  styleUrls: ['./book-text.component.css']
})
export class BookTextComponent implements OnInit {
  selectedSRC :any;
  @ViewChild('text', { static: true }) text: any;

  
  constructor(private bookservice: AllbooksService, private renderer : Renderer2) { }

  ngOnInit(): void {
    let element: HTMLElement = document.getElementById("modal") as HTMLElement;
    element.click();
  }
  getText(){
    this.selectedSRC = this.bookservice.getBookText();
    this.renderer.setAttribute(this.text.nativeElement, "src", this.selectedSRC)
  }

}
