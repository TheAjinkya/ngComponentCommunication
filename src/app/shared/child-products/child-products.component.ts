import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-products',
  templateUrl: './child-products.component.html',
  styleUrls: ['./child-products.component.scss']
})
export class ChildProductsComponent implements OnInit {

  constructor() { 
  }
  childProductsList:any[]=[]
  ngOnInit(): void {
    this.childProductsList = ['iPhone 11','iPhone 12','iPhone 13','iPhone 14']
  }

  getProducts() {
    return this.childProductsList
  }

  addNewProduct(productName:String) {
    this.childProductsList.push(productName)
  }

  

}
