import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HeaderComponent,
  HeroSlideComponent,
  LoadingComponent,
} from 'src/libs/cores/components';
import { ProductFacade } from 'src/libs/cores/services/product/product.facade';
import { tap } from 'rxjs';
import { RouterModule } from '@angular/router';
import {
  faChevronLeft,
  faChevronRight,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    LoadingComponent,
    HeroSlideComponent,
    RouterModule,
    FontAwesomeModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  products$ = this.productFacade.products$;
  isLoading = false;
  faSearch = faSearch;
  faRight = faChevronRight;
  faLeft = faChevronLeft;
  constructor(private productFacade: ProductFacade) {}
  ngOnInit(): void {
    this.getRandom();
  }
  getRandom() {
    this.isLoading = true;

    this.productFacade
      .getRandom()
      .pipe(
        tap(() => {
          this.isLoading = false;
        })
      )
      .subscribe();
  }
}
