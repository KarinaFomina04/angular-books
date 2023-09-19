// // book-detail.component.ts
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { BookService } from './book.service'; // Сервис для получения данных о книгах
//
// @Component({
//   selector: 'app-book-detail',
//   templateUrl: './book-detail.component.html',
// })
// export class BookDetailComponent implements OnInit {
//   bookId: number;
//   book: any; // Замените на интерфейс для книг
//
//   constructor(
//     private route: ActivatedRoute,
//     private bookService: BookService
//   ) {}
//
//   ngOnInit() {
//     this.bookId = +this.route.snapshot.paramMap.get('id');
//     this.book = this.bookService.getBookById(this.bookId); // Получение данных о книге
//   }
// }
