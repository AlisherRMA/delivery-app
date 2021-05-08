/** Контактные данные клиента */
export interface UserContactsDto {
  name: string;
  mobileNumber: string;
  city: string;
  alternativeCity?: string;
  address: string;
}
