import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router ) {
  }

  getActiveClass(name: string): string
  {
    if("/"+name == this.router.url)
    {
      return "ff-nav-route-active";
    }
    else return "ff-nav-route"; 
  }

  isVisible(name: string): boolean
  {
    if("/"+name == this.router.url)
    {
      return true;
    }
    else return false; 
  }

}
