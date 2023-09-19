// import { Component, Input } from '@angular/core';
// import { IProduct } from '../../models/product';
// import { ActivatedRoute } from '@angular/router';
// import { ProductsService } from '../../services/products.service';
//
// @Component({
//   selector: 'app-book-detail',
//   templateUrl: './book-detail.component.html',
//   styleUrls: ['./book-detail.component.scss']
// })
// export class BookDetailComponent {
//   @Input() product?: IProduct;
//   newAuthorName: string = '';
//
//   constructor(
//     private route: ActivatedRoute,
//     private productsService: ProductsService
//   ) {
//     const productId = Number(this.route.snapshot.params['id']);
//     this.product = productsService?.products.find(product => product.id === productId);
//   }
//
//   editAuthor() {
//     if (this.newAuthorName) {
//       // Обновляем имя автора продукта
//       if (this.product) {
//         this.product.author = this.newAuthorName;
//         this.newAuthorName = '';
//       }
//     }
//   }
// }

import {Component, Input} from '@angular/core';
import { IProduct } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import {ProductsService} from "../../services/products.service";


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent {
  @Input() product?: IProduct;

  constructor(
    private route: ActivatedRoute, private productsService: ProductsService
  ) {
    const productId = Number(this.route.snapshot.params['id'])
    this.product = productsService?.products.find(product => product.id === productId)
  }
}
