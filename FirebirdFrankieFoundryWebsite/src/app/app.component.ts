import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  route: string = 'design';
  testRoute: string = this.router.url

  constructor(private router: Router ) {
  }

  getActiveClass(name: string): string
  {
    if("/"+name == this.router.url)
      return "ff-nav-route-active";
    else return "ff-nav-route"; 
  }
}
