import { Product } from "./product.type";
/** Контактные данные клиента */
export interface UserContactsDto {
  name: string;
  mobileNumber: string;
  city: string;
  alternativeCity?: string;
  address: string;
  priceForSelectedCity: number;
  priceWithDelivery: number;
  withDelivery: boolean;
}

export interface UserSelectionDto {
  totalCount: number;
  items: Product[];
}
