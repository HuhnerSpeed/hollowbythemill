import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public scrollIntoView(e: any, element: string) {
    e.preventDefault();
    let DOMelement = document.getElementById(element);
    if (DOMelement) {
      DOMelement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
}
