import { Component, OnInit } from '@angular/core';
import {GiphySearchService} from '../../shared/services/giphy-search/giphy-search.service';
import {Observable, Subject, Subscription} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-giphy-search',
  templateUrl: './giphy-search.component.html',
  styleUrls: ['./giphy-search.component.scss']
})
export class GiphySearchComponent {
   enteredTags: Array<string>;
   page = 1;
   imageObservable$: Observable<any>;

  constructor(private gipphySearchService: GiphySearchService) {
  }

  getImageObservable() {
    return this.gipphySearchService.searchGiphy(this.concatenateAllSearchTags()).pipe(
      map((response: any) => {
        return response.data.map(giphyData => giphyData.images.original_still.url)
      })
    );
  }

  onSearch() {
    this.imageObservable$ = this.getImageObservable();
  }

  concatenateAllSearchTags() {
    let searchParam = '';
    if (this.enteredTags && this.enteredTags.length > 0) {
      this.enteredTags.forEach((tag: any) => {
        searchParam += `${tag.value}:`;
      });
    }
    return searchParam.substring(0, searchParam.length - 1);
  }

}
