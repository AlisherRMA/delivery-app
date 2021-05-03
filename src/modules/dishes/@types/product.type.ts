export interface Product {
  id: number;
  category_id: number;
  category_name: string;
  product_name: string;
  description?: string;
  image_link: string;
  prices: ProductPrice[] | string;
}

export interface ProductPrice {
  id: number;
  weight: number;
  price: number;
  discount: number;
}

export interface ProductGroups {
  category_id: number;
  identificator: string;
  groupTitle: string;
  products: Product[];
}
