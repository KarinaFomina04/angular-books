import {Component, Input} from '@angular/core';
import {IAuthor} from "../models/author";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent {
  @Input() author: IAuthor;
}
