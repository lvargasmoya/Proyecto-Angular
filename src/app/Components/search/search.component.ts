import { Component,  OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  gifs: any[] = [];
  subscription!: Subscription;


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  search(searchTerm:string){
    if(searchTerm !== ''){
      this.dataService.searchGifs(searchTerm);
      this.subscription = this.dataService.getGifs()
      .subscribe((response: any)=>{
        this.gifs = response;
        console.log(response);
      });

    }

  }

}
