import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiphySearchRoutingModule } from './giphy-search-routing.module';
import {GiphySearchComponent} from './giphy-search.component';
import {SharedModule} from '../../shared/shared.module';
import {TagInputModule} from 'ngx-chips';


@NgModule({
  declarations: [
    GiphySearchComponent
  ],
  imports: [
    CommonModule,
    GiphySearchRoutingModule,
    SharedModule,
    TagInputModule,
  ]
})
export class GiphySearchModule { }
