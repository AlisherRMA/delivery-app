export interface Product {
  /** id товара */
  id: number;
  /** id категории товара */
  category_id: number;
  /** категория товара */
  category_name: string;
  /** название товара */
  product_name: string;
  /** детальное описание товара */
  description?: string;
  /** ссылка на изображение */
  image_link: string;
  /** Цены товаров по каждому весу */
  prices: ProductPrice[];
  /** количество товаров в подкатегориях, которые были выбраны пользователем */
  overallUserSelectionCount: number;

  price_sort_number?: number;
}

export interface ProductPrice {
  id: number;
  weight: number;
  price: number;
  /** скидка */
  discount: number;
  userSelectionCount: number;
  is_default: 0 | 1;
}

export interface ProductGroups {
  category_id: number;
  identificator: string;
  groupTitle: string;
  products: Product[];
}

export interface Category {
  category_id: number;
  name: string;
  group_sort_number?: number;
}
