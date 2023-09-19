import { Component } from '@angular/core';
import { authors } from 'src/app/data/authors';

@Component({
  selector: 'app-authors-page',
  templateUrl: './authors-page.component.html',
  styleUrls: ['./authors-page.component.scss']
})
export class AuthorsPageComponent {
  authors = authors
  title = 'авторы';
}
