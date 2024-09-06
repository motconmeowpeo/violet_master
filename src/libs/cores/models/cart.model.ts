import { Product } from '../constants/data.constant';

export interface ICart {
  product: Product[];
}
export interface IProductCart {
  id: string | undefined;
  name: string | undefined;
  price: number | undefined;
  image: string | undefined;
  size: string | undefined;
  quantity: number | undefined;
}
