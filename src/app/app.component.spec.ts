import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ProductComponent} from "src/app/components/product/product.component";

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent],
    });

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should hide product details when "details" is false', () => {
    component.product = {
      title: 'Sample Title',
      author: 'Sample Author',
      genre: 'Sample Genre',
      pages: 200,
      language: 'Sample Language',
      description: 'Sample Description',
      image: 'sample.jpg',
    };
    component.details = false;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const detailsElement = compiled.querySelector('.product-details');

    expect(detailsElement).toBeNull();
  });

});
