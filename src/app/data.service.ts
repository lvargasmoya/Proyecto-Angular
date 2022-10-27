import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) {
    this.http = http;
  }

    getTrendingGifs(){
      return this.http.get(`//api.giphy.com/v1/gifs/trending?api_key=${environment.giphyAPIkey}&limit=50`);
    }

    getTrendingStickers(){
      return this.http.get(`//api.giphy.com/v1/stickers/trending?api_key=${environment.giphyAPIkey}&limit=50`)
    }

}
