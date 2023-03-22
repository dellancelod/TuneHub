import { Component, OnInit } from '@angular/core';

import { NavBarService } from '../services/nav-bar.service';

@Component({
  selector: 'app-nav-bar-toggler',
  templateUrl: './nav-bar-toggler.component.html',
  styleUrls: ['./nav-bar-toggler.component.scss']
})
export class NavBarTogglerComponent implements OnInit{
  constructor(public navBarService: NavBarService){}

  ngOnInit(): void {
    
  }
}
