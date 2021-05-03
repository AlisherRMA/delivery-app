import { Api } from "@/services/api.service";
import { ProductGroups } from "../@types/product.type";

export class ProductsService {
  static async getProducts(): Promise<ProductGroups[]> {
    const response = await Api.get("/api/products");
    return response.data;
  }
}
