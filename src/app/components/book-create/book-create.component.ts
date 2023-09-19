// book-create.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
})
export class BookCreateComponent {
  bookForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bookForm = this.fb.group({
      title: '',
      author: '',
      description: '',
      pageCount: 0,
      language: '',
      genre: '',
    });
  }

  createBook() {
    // Отправка данных о новой книге на сервер или сохранение в локальном хранилище
    const newBookData = this.bookForm.value;
    // Дополнительная логика сохранения книги
  }
}
