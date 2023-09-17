import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { products as data } from './data/products';
import { ProductService } from './services/product.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular app';

  // products: Array<IProduct> = [];
  loading = false;
  products$: Observable<Array<IProduct>>;
  term = '';

  constructor(private produсtsService: ProductService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.produсtsService.getALl().pipe(
      tap(() => this.loading = false)
    );
  }
}
