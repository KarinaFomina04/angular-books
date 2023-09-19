import { Component } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";
import {IDropdownSettings} from "ng-multiselect-dropdown";
import {authors} from "src/app/data/authors";
import {languages} from "src/app/data/languages";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  title = 'Список книг';
  loading = false;
  term = '';
  description = '';
  minPages: number;
  maxPages: number;
  genre: string;
  dropdownAuthorList: any = [];
  dropdownLanguageList: any = [];
  selectedAuthors: any = [];
  selectedLanguages: any = [];
  dropdownSettings: IDropdownSettings = {};

  constructor(
    public productsService: ProductsService,
    public modalService: ModalService
  ) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.productsService.getAll().subscribe(() => {
      this.loading = false
    })
    this.dropdownAuthorList = authors;
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'name',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.dropdownLanguageList = languages;

  }

  onItemSelect(item: any) {
  }

  onSelectAll(items: any) {
  }

}
