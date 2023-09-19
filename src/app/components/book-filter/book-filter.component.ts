// book-filter.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-filter',
  templateUrl: './book-filter.component.html',
})
export class BookFilterComponent {
  @Output() filterChanged = new EventEmitter<any>();

  // Добавьте поля для фильтров и методы для их изменения
  filter: any = {
    author: [],
    language: [],
    pageCount: { min: 0, max: 1000 },
    genre: '',
  };

  applyFilter() {
    this.filterChanged.emit(this.filter);
  }
}
