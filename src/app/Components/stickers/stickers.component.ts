import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-stickers',
  templateUrl: './stickers.component.html',
  styleUrls: ['./stickers.component.css']
})
export class StickersComponent implements OnInit, OnDestroy {
  stickers: any[] = [];
  subscription!: Subscription;



  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getTrendingStickers();
    this.subscription = this.dataService.getGifs()
      .subscribe((response: any)=>{
        this.stickers = response;
      });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
