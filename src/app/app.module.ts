import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductComponent} from './components/product/product.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {GlobalErrorComponent} from './components/global-error/global-error.component';
import { IonicModule } from '@ionic/angular';
import { ModalComponent } from './components/modal/modal.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { FocusDirective } from './directives/focus.directive';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NavigatonComponent } from './components/navigaton/navigaton.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    GlobalErrorComponent,
    ModalComponent,
    CreateProductComponent,
    FilterProductsPipe,
    FocusDirective,
    ProductPageComponent,
    AboutPageComponent,
    NavigatonComponent,
    BookDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
