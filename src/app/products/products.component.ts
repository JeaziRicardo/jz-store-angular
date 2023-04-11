import { Component, OnInit } from '@angular/core';
import { IProduct } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productsList: IProduct[] | undefined;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productsList = this.productsService.getAll();
  }
}
