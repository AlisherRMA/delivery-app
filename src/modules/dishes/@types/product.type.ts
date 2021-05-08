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
}

export interface ProductPrice {
  id: number;
  weight: number;
  price: number;
  /** скидка */
  discount: number;
  userSelectionCount: number;
}

export interface ProductGroups {
  category_id: number;
  identificator: string;
  groupTitle: string;
  products: Product[];
}
