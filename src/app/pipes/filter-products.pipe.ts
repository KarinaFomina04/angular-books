import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from "../models/product";

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: IProduct[], search: string, descriptionSearch: string, minPages: number, maxPages: number, genre: string): IProduct[] {
    console.log('search', search, 'descri', descriptionSearch)
    let result = products;
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
    return result;
  }

}
