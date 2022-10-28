import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
gifs = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {
    this.http = http;
  }

    getTrendingGifs(){
      return this.http.get(`//api.giphy.com/v1/gifs/trending?api_key=${environment.giphyAPIkey}&limit=50`)
      .subscribe((response:any)=>{
        this.gifs.next(response.data);
      });
    }

    getTrendingStickers(){
      return this.http.get(`//api.giphy.com/v1/stickers/trending?api_key=${environment.giphyAPIkey}&limit=50`)
      .subscribe((response:any)=>{
        this.gifs.next(response.data);
      });
    }

    searchGifs(gifName:string){
      return this.http.get(`//api.giphy.com/v1/gifs/search?q=${gifName}&api_key=${environment.giphyAPIkey}&limit=50`)
      .subscribe((response:any)=>{
        this.gifs.next(response.data);
      });

    }

    getGifs(){
      return this.gifs.asObservable();
    }

}
