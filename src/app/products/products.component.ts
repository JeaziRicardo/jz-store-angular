import { Component } from '@angular/core';
import { IProduto, produtos } from '../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productsList: IProduto[] = produtos;
}
