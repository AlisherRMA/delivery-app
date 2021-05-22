import { Product } from "./product.type";
/** Контактные данные клиента */
export interface UserContactsDto {
  name: string;
  mobileNumber: string;
  city: string;
  alternativeCity?: string;
  address: string;
}

export interface UserSelectionDto {
  totalCount: number;
  items: Product[];
}
