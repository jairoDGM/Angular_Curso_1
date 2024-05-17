import { Component } from '@angular/core';
import { productList } from '../products/products.mock';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  productList = productList;

}
