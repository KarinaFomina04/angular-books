import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, delay, retry, tap } from 'rxjs/operators';
import { IProduct } from '../models/product';
import { ErrorService } from './error.service';
import { products } from '../data/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private errorService: ErrorService) {}

  products: IProduct[] = products;

  getAll(): Observable<Array<IProduct>> {
    return of(this.products).pipe(
      delay(2000),
      retry(2),
      catchError(this.errorHandler.bind(this))
    );
  }

  create(product: IProduct): Observable<IProduct> {
    this.products.push(product);
    return of(product);
  }

  private errorHandler(error: any) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
