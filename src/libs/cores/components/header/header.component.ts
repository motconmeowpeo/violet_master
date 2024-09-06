import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthFacade } from '../../services/auth';
import { CartFacade } from '../../services/cart/cart.facade';
import { IProductCart } from '../../models/cart.model';
import {
  faBars,
  faChevronLeft,
  faSignal,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUber } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user$ = this.authFacade.user$;
  isAuthorized = false;
  product$ = this.cartFacade.product$;
  readonly faSignal = faBars;
  readonly faUser = faUser;
  constructor(
    private authFacade: AuthFacade,
    private router: Router,
    private cartFacade: CartFacade
  ) {}

  ngOnInit() {
    this.isAuthenticated();
  }

  isAuthenticated() {
    return this.authFacade.isAuthenticated().subscribe((isAuth) => {
      this.isAuthorized = isAuth;
    });
  }
  logout() {
    this.authFacade.logOut();
  }

  calcProduct(product: IProductCart[]) {
    const initialValue = 0;
    const sumWithInitial = product.reduce(
      (accumulator, currentValue) => accumulator + (currentValue.quantity || 0),
      initialValue
    );
    return sumWithInitial;
  }
}
