import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExampleImage } from './models/example-artwork.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiURL: string = "https://localhost:5001/api"

  constructor(private http: HttpClient) { }

  getExampleArtworks(packageID: number): Observable<ExampleImage[]>
  {
    let headers = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('Access-Control-Allow-Headers', 'Content-Type')
    .append('Access-Control-Allow-Methods', '*')
    .append('Access-Control-Allow-Origin', '*');

    return this.http.get<ExampleImage[]>(this.apiURL + "/package/" + packageID, { headers });
  } 
}
