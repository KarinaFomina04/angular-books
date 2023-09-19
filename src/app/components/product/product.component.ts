import { Component, Input } from '@angular/core';
import { IProduct } from '../../models/product';
import { CommonModule } from '@angular/common';
import {Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {

  constructor(private router: Router) {}
  goToBookDetail(id: number | undefined){
    this.router.navigate([`/book-detail/${id}`])
  }
  @Input() product: IProduct;

  details = false;
}
