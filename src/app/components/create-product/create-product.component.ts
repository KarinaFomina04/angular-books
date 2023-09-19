import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {

  constructor(private productService: ProductsService,
              private modalService: ModalService) {
  }

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ])
  })

  get title() {
    return this.form.controls.title as FormControl
  }

  ngOnInit(): void {}
  submit() {
    console.log(this.form.value)
    this.productService.create({
      title: this.form.value as string,
      author: 'Neil Gaiman',
      description: 'lorem ipsum set',
      genre: 'detective',
      language: 'english',
      pages: 325,
      image: 'https://i.pravatar.cc',
    }).subscribe(()=>{
      this.modalService.close()
    })
  }
}
