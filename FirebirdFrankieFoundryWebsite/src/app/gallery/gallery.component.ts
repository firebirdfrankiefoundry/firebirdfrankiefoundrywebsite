import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  expandedP1: boolean = false;
  expandedP2: boolean = false;
  expandedP3: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  expandBlock(id: number): void {
    if (id == 1)
      this.expandedP1 = !this.expandedP1;
    if (id == 2)
      this.expandedP2 = !this.expandedP2;
    if (id == 3)
      this.expandedP3 = !this.expandedP3;
  }
}
