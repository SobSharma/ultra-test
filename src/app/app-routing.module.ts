import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'giphy-search',
    loadChildren : () => import('./modules/giphy-search/giphy-search.module').then(m => m.GiphySearchModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/giphy-search'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
