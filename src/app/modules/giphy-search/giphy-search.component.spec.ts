import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { GiphySearchComponent } from './giphy-search.component';
import {By} from '@angular/platform-browser';
import {SharedModule} from '../../shared/shared.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {GiphySearchService} from '../../shared/services/giphy-search/giphy-search.service';
import {of} from 'rxjs';



describe('GiphySearchComponent', () => {
  let component: GiphySearchComponent;
  let fixture: ComponentFixture<GiphySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiphySearchComponent ],
      imports: [SharedModule, HttpClientTestingModule, BrowserAnimationsModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        GiphySearchService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain search Giphy Button', async(() => {
    const nativeElement = fixture.debugElement.nativeElement;
    expect(nativeElement.querySelector('.btn btn-primary')).toBeDefined();
  }));


  it('search button click should call onSearch method', fakeAsync(() => {
    fixture.detectChanges();
    spyOn(component, 'onSearch');
    const btn = fixture.debugElement.query(By.css('button'));
    btn.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.onSearch).toHaveBeenCalled();
  }));

  it('search button click should call concatenateAllSearchTags', fakeAsync(() => {
    fixture.detectChanges();
    spyOn(component, 'concatenateAllSearchTags');
    const btn = fixture.debugElement.query(By.css('button'));
    btn.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.concatenateAllSearchTags).toHaveBeenCalled();
  }));

  it('should display giphy images', fakeAsync(() => {
    fixture.detectChanges();
    const testImageData = ['https://homepages.cae.wisc.edu/~ece533/images/airplane.png'];
    component.imageObservable$ = of(testImageData);
    fixture.detectChanges();
    const imageDisplayed = fixture.debugElement.query(By.css('img'));
    expect(imageDisplayed).toBeDefined();
  }));

  it('should display pagination when image is displayed', fakeAsync(() => {
    fixture.detectChanges();
    const testImageData = ['https://homepages.cae.wisc.edu/~ece533/images/airplane.png'];
    component.imageObservable$ = of(testImageData);
    fixture.detectChanges();
    const paginationControl = fixture.debugElement.query(By.css('pagination-controls'));
    expect(paginationControl).toBeDefined();
  }));
});
