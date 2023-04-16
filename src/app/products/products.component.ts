import { Component, OnInit } from '@angular/core';
import { IProduct } from '../products';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productsList: IProduct[] | undefined;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const description = params['description'].toLowerCase();

      if(!description) {
        this.productsList = this.productsService.getAll();
        return;
      }

      this.productsList = this.productsService.getAll().filter(product => product.description.toLowerCase().includes(description));
    });
  }
}
