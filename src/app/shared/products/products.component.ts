import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ChildProductsComponent } from '../child-products/child-products.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any[] = []
  @ViewChild(ChildProductsComponent) childComp!: ChildProductsComponent
  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit() {
    // Promise.resolve().then(x => {
    // })
    this.products = this.childComp.childProductsList
    this.changeDetector.detectChanges()
  }
}
