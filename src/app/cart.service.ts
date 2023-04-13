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

  removeItem(product: ICartProduct): void {
    const cartItems: ICartProduct[] = this.getItems();
    const cartNew = cartItems.filter(item => item.id !== product.id);
    localStorage.setItem('cart', JSON.stringify(cartNew));
  }

  clearCart(): void {
    localStorage.removeItem('cart');
  }
}
