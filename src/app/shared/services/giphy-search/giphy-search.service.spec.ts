import {async, fakeAsync, inject, TestBed} from '@angular/core/testing';
import { GiphySearchService } from './giphy-search.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GiphySearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({

    imports: [HttpClientTestingModule],
  }));

  it('should be created', () => {
    const service: GiphySearchService = TestBed.get(GiphySearchService);
    expect(service).toBeTruthy();
  });

  it('valid tag seach should call giphy API and return valid result', async(inject([GiphySearchService], (giphySearchService) => {
    const searchParms = 'test';
    giphySearchService.searchGiphy(searchParms).subscribe((data: any) => {
      expect(data.data.length).toBeGreaterThan(0);
    });
  })));

  it('invalid tag search should call giphy API and return no result ', async(inject([GiphySearchService], (giphySearchService) => {
    const searchParms = 'sdsdsdsds'; // invalid tag
    giphySearchService.searchGiphy(searchParms).subscribe((data: any) => {
      expect(data.data.length).toEqual(0);
    });
  })));

});
