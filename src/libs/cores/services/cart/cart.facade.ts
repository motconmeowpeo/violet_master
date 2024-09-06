import { Injectable } from '@angular/core';
import { store } from './cart.store';
import { IProductCart } from '../../models/cart.model';
import { select } from '@ngneat/elf';
import { Product } from '../../constants/data.constant';
import { IProduct } from '../../models/product.model';

@Injectable({ providedIn: 'root' })
export class CartFacade {
  product$ = store.pipe(select((state) => state.product));
  addToCart(product: Product) {
    console.log('IN', product.cartQuantity);
    store.update((state) => {
      if (!state.product.length) {
        return {
          ...state,
          product: [product],
        };
      }
      const productExisted = state.product.find((prd) => prd.id === product.id);
      if (productExisted) {
        return {
          ...state,
          product: state.product.map((prd) => {
            if (prd.id === product.id) {
              console.log('STE', prd.cartQuantity);
              return {
                ...prd,
                cartQuantity:
                  (prd.cartQuantity || 0) + (product.cartQuantity || 0),
              };
            }
            return prd;
          }),
        };
      } else {
        return {
          ...state,
          product: [...state.product, product],
        };
      }
    });
  }

  removeFromCart(product: Product) {
    store.update((state) => {
      return {
        ...state,
        product: state.product.filter((prd) => prd.id !== product.id),
      };
    });
  }
  plus(product: Product) {
    store.update((state) => {
      return {
        ...state,
        product: state.product.map((prd) => {
          if (prd.id === product.id) {
            return { ...prd, cartQuantity: prd.cartQuantity + 1 };
          }
          return prd;
        }),
      };
    });
  }
  minus(product: Product) {
    store.update((state) => {
      return {
        ...state,
        product: state.product.map((prd) => {
          if (prd.id === product.id) {
            return {
              ...prd,
              cartQuantity: prd.cartQuantity === 0 ? 0 : prd.cartQuantity - 1,
            };
          }
          return prd;
        }),
      };
    });
  }

  clearCart() {
    store.destroy();
  }
}
