import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GiphySearchService} from './services/giphy-search/giphy-search.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    TagInputModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgbModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    TagInputModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgbModule
  ],
  providers: [
    GiphySearchService
  ]
})
export class SharedModule { }
