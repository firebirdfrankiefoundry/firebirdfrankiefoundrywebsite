import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service.service';
import { ExampleImage } from '../models/example-artwork.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public expanded: boolean[] = [false, false, false];
  public packageFilled: boolean[] = [false, false, false];
  public package1: ExampleImage[] = [];
  public package2: ExampleImage[] = [];
  public package3: ExampleImage[] = [];
  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
    this.apiService.getExampleArtworks(1).subscribe(response => {
      this.package1 = response;
    }, err => {
      console.log(err);
    }, () => {
    });

    this.apiService.getExampleArtworks(2).subscribe(response => {
      this.package2 = response;
    }, err => {
      console.log(err);
    }, () => {
    });

    this.apiService.getExampleArtworks(3).subscribe(response => {
      this.package3 = response;
    }, err => {
      console.log(err);
    }, () => {
    });
  }

  exampleArt(packageId: number, index: number) {
    let styles = {
      //backgroundImage: (this.package1.length > 0 ? "url( data:image/png;base64," + this.package1[0].image64 +")" : "")
      backgroundColor: this.package1.length > 0 ? 'red' : 'blue'
    };
    return styles;
  }

  expandBlock(id: number): void {
    this.expanded[id] = !this.expanded[id];
  }
}
