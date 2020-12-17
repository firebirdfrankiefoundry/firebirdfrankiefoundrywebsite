import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  route = 'design';

  getActiveClass(name: string): string
  {
    if(name == this.route)
      return "ff-nav-route-active";
    else return "ff-nav-route"; 
  }
}
