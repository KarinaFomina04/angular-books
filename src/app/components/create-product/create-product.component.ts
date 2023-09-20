import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../models/product';
import {ModalService} from "../../services/modal.service";
import {products} from "src/app/data/products";
import {authors} from "../../data/authors";
import {languages} from "../../data/languages";
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})

export class CreateProductComponent implements OnInit {
  selectedAuthor: string = '';
  selectedLanguage: string = '';
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

  authors: string[] = [];
  languages: string[] = [];
  constructor(
    private productService: ProductsService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.authors = authors?.map(author=>author.name)
    this.languages = languages?.map(language => language.name);
  }

  onSubmit() {
    this.newBook.author = this.selectedAuthor;
    console.log(this.selectedAuthor,"selectedAuuthoe")

    this.newBook.language = this.selectedLanguage;
    console.log(this.selectedLanguage,"selectedLanguage")

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
    this.modalService.close();
  }
}
