// import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
// import {catchError, delay, Observable, retry, tap, throwError} from 'rxjs';
// import { IProduct } from '../models/product';
// import { ErrorService } from './error.service';
//
// @Injectable({
//   providedIn: 'root',
// })
//
// export class ProductsService {
//   constructor(
//     private http: HttpClient,
//     private errorService: ErrorService,
//     ) {
//   }
//
//   products: IProduct[] = []
//
//   getAll(): Observable<Array<IProduct>> {
//     return this.http.get<Array<IProduct>>('https://fakestoreapi.com/products', {
//       params: new HttpParams({
//         fromObject: {limit: 5}
//       })
//     }).pipe(
//       delay(2000),
//       retry(2),
//       tap(products => this.products = products ),
//       catchError(this.errorHandler.bind(this)),
//     )
//   }
//   create(product: IProduct): Observable<IProduct>{
//     return this.http.post<IProduct>('https://fakestoreapi.com/products', product)
//       .pipe(
//         tap(prod => this.products.push(prod))
//       )
//   }
//
//   private errorHandler(error: HttpErrorResponse) {
//     this.errorService.handle(error.message);
//     return throwError(() => error.message);
//   }
// }

// ProductsService.ts

import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, delay, retry, tap } from 'rxjs/operators';
import { IProduct } from '../models/product';
import { ErrorService } from './error.service';
import { products } from '../data/products'; // Импортируем данные из products.ts

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private errorService: ErrorService) {}

  products: IProduct[] = products; // Используем данные из products.ts

  getAll(): Observable<Array<IProduct>> {
    // Вместо HTTP-запроса используем данные из переменной products
    return of(this.products).pipe(
      delay(2000),
      retry(2),
      catchError(this.errorHandler.bind(this))
    );
  }

  create(product: IProduct): Observable<IProduct> {
    // В этом методе вы можете добавить логику для добавления нового продукта к уже существующим данным.
    // Например, добавьте product в массив products и верните его как результат операции.
    this.products.push(product);
    return of(product);
  }

  private errorHandler(error: any) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
