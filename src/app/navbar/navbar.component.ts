import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navLinks: any[] = [
    {
      text: 'Home',
      link: '#'
    },
    {
      text: 'Search',
      link: '#'
    },
    {
      text: 'Library',
      link: '#'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
