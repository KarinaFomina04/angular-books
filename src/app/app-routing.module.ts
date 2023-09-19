import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductPageComponent} from "./pages/product-page/product-page.component";
import {AboutPageComponent} from "./pages/about-page/about-page.component";
import { BookDetailComponent } from "./pages/book-detail/book-detail.component";
import {AuthorsPageComponent} from "./pages/authors-page/authors-page.component";

const routes: Routes = [
  { path: '', component: ProductPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'book-detail/:id', component: BookDetailComponent },
  { path: 'authors', component: AuthorsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
