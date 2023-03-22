import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {

  hideNavBar: boolean = false;
 
  constructor() { }
 
  toggleSideNav(): void {
    this.hideNavBar = !this.hideNavBar;
  }
}
