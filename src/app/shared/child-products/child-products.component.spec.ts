import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildProductsComponent } from './child-products.component';

describe('ChildProductsComponent', () => {
  let component: ChildProductsComponent;
  let fixture: ComponentFixture<ChildProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
