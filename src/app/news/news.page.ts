import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  url = 'top-headlines?country=in';
  myArticles: any;
  constructor(private _data: NewsService) { }

  ngOnInit() {
    this._data.getAllNews(this.url).subscribe(
      (data: any) => {
        this.myArticles = data;
      },
      function(err) {
        console.log(err);
      },
      function() {
        alert('Please wait!!!');
      }
    );
  }

  callSingleNews(item) {
    this._data.singleNews(item);
  }

}
