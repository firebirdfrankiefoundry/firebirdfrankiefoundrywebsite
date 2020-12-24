import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  expanded: boolean[] = [ false, false, false ]
  constructor(private apiService: ApiService) { 
    
  }

  ngOnInit(): void {
    this.apiService.getExampleArtworks().subscribe(response => {
      //do something with response
      console.log(response);
    }, err => {
      console.log(err);
    }, () => {
    });
  }

  expandBlock(id: number): void {
    this.expanded[id] = !this.expanded[id];
  }
}
