import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentYear: number = (new Date()).getFullYear();  

  constructor(private router: Router ) {
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
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
