import {Component} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";
import {products} from "src/app/data/products";
import {IProduct} from "src/app/models/product";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})

export class CreateProductComponent {
  newBook: IProduct = {
    id: 0,
    title: '',
    author: '',
    description: '',
    genre: '',
    image: 'https://i.pravatar.cc',
    language: '',
    pages: 0,
  };
  constructor(private productService: ProductsService, private modalService: ModalService) {}

  onSubmit() {
    products.unshift(this.newBook);
    this.newBook = {
      id: 0,
      title: '',
      author: '',
      description: '',
      genre: '',
      image: 'https://i.pravatar.cc',
      language: '',
      pages: 0,
    };
    this.modalService.close()
  }
}
