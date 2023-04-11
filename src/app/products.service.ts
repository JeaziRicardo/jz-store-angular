import { Injectable } from '@angular/core';
import { IProduct, products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productList: IProduct[] = products;

  constructor() { }

  getAll(): IProduct[] {
    return this.productList;
  }

  getOne(id: number): IProduct | undefined {
    return this.productList.find(product => product.id === id);
  }
}
