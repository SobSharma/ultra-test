import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GiphySearchService} from '../../shared/services/giphy-search/giphy-search.service';
import {Observable, Subject, Subscription} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-giphy-search',
  templateUrl: './giphy-search.component.html',
  styleUrls: ['./giphy-search.component.scss']
})
export class GiphySearchComponent {
  @ViewChild('videoPlayer', {static: false}) videoplayer: ElementRef;
   enteredTags: Array<string>;
   page = 1;
   imageObservable$: Observable<any>;
   maxNumberOfTags = 10;

  constructor(private gipphySearchService: GiphySearchService) {
  }

  getImageObservable() {
    return this.gipphySearchService.searchGiphy(this.concatenateAllSearchTags()).pipe(
      map((response: any) => {
        return response.data.map(giphyData => giphyData.images.original.mp4);
      })
    );
  }

  onSearch() {
    this.page = 1;
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

  toggleVideo() {
    this.videoplayer.nativeElement.play();
  }

}
