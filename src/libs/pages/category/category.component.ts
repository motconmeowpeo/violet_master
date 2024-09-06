import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductFacade } from 'src/libs/cores/services/product/product.facade';
import { debounce, delay, delayWhen, tap } from 'rxjs';
import { LoadingComponent } from 'src/libs/cores/components';
import { IBaseParams } from 'src/libs/cores/models/product.model';
import { DATA, Product } from 'src/libs/cores/constants/data.constant';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { CartFacade } from 'src/libs/cores/services/cart/cart.facade';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, RouterModule, LoadingComponent, FontAwesomeModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  readonly data: Product[] = DATA;
  isLoading = false;
  sort = 1;
  sortObject!: IBaseParams;
  quantity = 1;
  faPlus = faPlus;
  faMinus = faMinus;
  constructor(private cartFacade: CartFacade) {}
  ngOnInit(): void {}
  changeQuantity(i: number, action: boolean) {
    if (action) {
      this.data[i].cartQuantity++;
    } else {
      this.data[i].cartQuantity--;
      if (this.data[i].cartQuantity < 1) {
        this.data[i].cartQuantity = 1;
      }
    }
  }
  addToCart(product: Product) {
    this.cartFacade.addToCart(product);
  }
}
