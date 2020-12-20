import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  expanded: boolean[] = [ false, false, false ]
  constructor() { }

  ngOnInit(): void {
  }

  expandBlock(id: number): void {
    this.expanded[id] = !this.expanded[id];
  }
}
