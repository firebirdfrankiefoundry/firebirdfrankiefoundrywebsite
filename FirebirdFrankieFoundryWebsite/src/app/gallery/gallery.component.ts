import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  expanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  expandBlock(): void 
  {
    this.expanded = !this.expanded;
  }
}
