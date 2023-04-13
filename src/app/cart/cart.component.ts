import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ICartProduct } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: ICartProduct[] = [];
  total: number = 0;

  constructor(
    public cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    this.totalPrice();
  }

  removeItem(product: ICartProduct): void {
    this.cartItems = this.cartItems.filter(item => item.id !== product.id);
    this.cartService.removeItem(product);
    this.totalPrice();
  }

  totalPrice(): number {
    this.total = this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    return this.total;
  }
}
