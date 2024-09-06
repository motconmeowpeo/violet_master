import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartFacade } from 'src/libs/cores/services/cart/cart.facade';
import { IProductCart } from 'src/libs/cores/models/cart.model';
import { Product } from 'src/libs/cores/constants/data.constant';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  product$ = this.cartFacade.product$;
  faPlus = faPlus;
  faMinus = faMinus;
  faTrash = faTrash;
  constructor(private cartFacade: CartFacade) {}
  ngOnInit(): void {
    this.product$.subscribe((date) => console.log(date));
  }

  calcTotal(products: Product[]) {
    const initialValue = 0;
    const sumWithInitial = products.reduce(
      (accumulator, currentValue) =>
        accumulator +
        (currentValue.cartQuantity || 0) *
          (+currentValue.price.replace('.', '') || 0),
      initialValue
    );
    return sumWithInitial;
  }

  removeFromCart(product: Product) {
    this.cartFacade.removeFromCart(product);
  }

  getPrice(product: Product) {
    return +product.price.replace('.', '');
  }
  changeQuantity(product: Product, action: boolean) {
    if (!action) {
      this.cartFacade.minus(product);
    } else {
      this.cartFacade.plus(product);
    }
  }
}
