import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError,  Observable, throwError } from 'rxjs';
import { IProduct } from '../models/product';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})

export class ProductService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
    ) {
  }

  getALl(): Observable<Array<IProduct>> {
    return this.http.get<Array<IProduct>>('https://fakestoreapi.com/products', {
      params: new HttpParams({
        fromObject: {limit: 5}
      })
    }).pipe(
      catchError(this.errorHandler.bind(this)),
    )
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
