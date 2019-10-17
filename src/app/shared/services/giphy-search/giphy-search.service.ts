import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GiphySearchService {
  url = 'http://api.giphy.com/v1/gifs/search';
  apiKey = 'YXGwbYJ26vmbA2z6dPz2NYyA1YuzmRZD';


  constructor(private httpClient: HttpClient) { }


  searchGiphy(searchParams) {
    return this
      .httpClient
      .get(`${this.url}?api_key=${this.apiKey}&q=${searchParams}`);
  }

}
