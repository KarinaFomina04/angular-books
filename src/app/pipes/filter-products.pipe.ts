import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from "../models/product";
import {IAuthor} from "src/app/models/author";
import {ILanguage} from "src/app/models/language";


@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: IProduct[], search: string, descriptionSearch: string, minPages: number, maxPages: number,
            genre: string,authors: IAuthor[], languages: ILanguage[]): IProduct[] {
    let result = products;
    const checkSubset = (parentArray: any[], subsetArray: any[]) => {
      return subsetArray.every((el) => {
        return parentArray.includes(el)
      })
    }

    if (search.length > 0) {
      result = products.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
    }

    if (descriptionSearch.length) {
      result = result.filter(p => p.description.toLowerCase().includes(descriptionSearch.toLowerCase()));
    }
    if (!isNaN(minPages)) {
      result = result.filter(p => p.pages >= minPages);
    }

    if (!isNaN(maxPages)) {
      result = result.filter(p => p.pages <= maxPages);
    }
    if (genre) {
      result = result.filter(p => p.genre.includes(genre));
    }
    if (authors && Array.isArray(authors)) {
      result = result.filter(p => checkSubset(p.author.split(', '), authors.map(a=> a.name)));
    }
    if (languages && Array.isArray(languages)) {
      result = result.filter(p => checkSubset(p.language.split(', '), languages.map(a=> a.name)));
    }

    return result;
  }

}

