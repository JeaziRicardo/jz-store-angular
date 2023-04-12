import { Injectable } from '@angular/core';
import { ICartProduct } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  
  getItems(): ICartProduct[] {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }

  addToCart(product: ICartProduct): void {
    const cartItems: ICartProduct[] = this.getItems();
    localStorage.setItem('cart', JSON.stringify([...cartItems, product]));
  }

  clearCart(): void {
    localStorage.removeItem('cart');
  }
}
