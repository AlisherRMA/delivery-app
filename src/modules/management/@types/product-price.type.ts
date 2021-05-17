export interface ProductPriceBase {
  discount: number;
  is_default: number | boolean;
  price: number;
  price_id: number | null;
  product_id: number;
  weight: number;
}
