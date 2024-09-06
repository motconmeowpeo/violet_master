import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductFacade } from 'src/libs/cores/services/product/product.facade';
import { LoadingComponent } from 'src/libs/cores/components';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IProductForm } from './product.form';
import { IProduct } from '../../cores/models/product.model';
import { tap } from 'rxjs';
import { CartFacade } from 'src/libs/cores/services/cart/cart.facade';
import { DATA, Product } from 'src/libs/cores/constants/data.constant';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    CommonModule,
    LoadingComponent,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  product!: Product;
  isLoading = false;
  faHeart = faHeart;
  form!: FormGroup<IProductForm>;
  activeIndex = 0;
  constructor(
    private route: ActivatedRoute,
    private productFacade: ProductFacade,
    private cartFacade: CartFacade
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id']; // 'id' should match the parameter name in the route
      if (id) {
        const temp = DATA.find((d) => d.id === +id);

        if (temp) this.product = temp;
      }
    });
  }
  changeQuantity(e: any) {
    const value = e.target.value;
    if (value && +value > 0) {
      this.product.cartQuantity = +value;
    } else {
      this.product.cartQuantity = 1;
    }
  }

  convertColor(colorCode: string) {
    return `bg-[${colorCode}]`;
  }
  setSize(size: string, index: number) {
    this.activeIndex = index;
    this.form.controls.size.setValue(size);
  }

  addToCart() {
    if (this.product) {
      this.cartFacade.addToCart(this.product);
    }
  }

  setQuantity(event: any) {
    const value = +event.target.value;
    if (value > 99) {
      this.form.controls.quantity.setValue(99);
    }
    if (value < 99 && value > 0) {
      this.form.controls.quantity.setValue(value);
    }
    if (value < 0) {
      this.form.controls.quantity.setValue(0);
    }
  }
}
