import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


const API_URL = environment.NEWS_API_URL;
const API_KEY = environment.NEWS_API_KEY;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  currentArticle: any;

  constructor(private _http: HttpClient, private router: Router) { }

  getAllNews(url: any) {
    return this._http.get(`${API_URL}/${url}&apikey=${API_KEY}`);
  }

  singleNews(item) {
    this.currentArticle = item;
    this.router.navigate(['/news-single']);

  }
}
