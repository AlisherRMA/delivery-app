import { Api } from "@/services/api.service";
import { ProductGroups } from "../@types/product.type";
import { City } from "../@types/city.type";
import { UserContactsDto, UserSelectionDto } from "../@types/order.dto";

export class ProductsService {
  static async getProducts(): Promise<ProductGroups[]> {
    const response = await Api.get("/api/products");
    return response.data;
  }

  static async sendOrder(userSelection: UserSelectionDto, userContacts: UserContactsDto): Promise<ProductGroups[]> {
    const response = await Api.post("/api/orders", { userSelection, userContacts });
    return response.data;
  }

  static async getCities(): Promise<City[]> {
    const response = await Api.get("/api/products/cities");
    return response.data;
  }
}
