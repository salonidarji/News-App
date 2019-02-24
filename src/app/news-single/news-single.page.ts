import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.page.html',
  styleUrls: ['./news-single.page.scss'],
})
export class NewsSinglePage implements OnInit {

  item: any;
  constructor(private _data: NewsService) { }

  ngOnInit() {
    this.item = this._data.currentArticle;
  }

}
