import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-products',
  templateUrl: './child-products.component.html',
  styleUrls: ['./child-products.component.scss']
})
export class ChildProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  childProductsList = ['iPhone 11','iPhone 12','iPhone 13','iPhone 14']

}
