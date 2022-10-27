import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-stickers',
  templateUrl: './stickers.component.html',
  styleUrls: ['./stickers.component.css']
})
export class StickersComponent implements OnInit {

  stickers: any[] = [];


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getTrendingStickers()
      .subscribe((response: any) => {
        this.stickers = response.data;

      });
      console.log(this.stickers)
  }

}
