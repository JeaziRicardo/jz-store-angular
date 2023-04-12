import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  quantity: number = 0;

  constructor(
    public cartService: CartService
  ) { }

  quantityCart(): number {
    return this.quantity = this.cartService.getItems().length; 
  }

}
