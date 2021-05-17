import { Api } from "@/services/api.service";
// import { ProductGroups } from "../@types/product.type";
import { Category, Product } from "../../dishes/@types/product.type";
import { ProductPriceBase } from "../@types/product-price.type";

export class ProductsManagementService {
  static async getProducts() {
    const response = await Api.get("/api/products/row");
    return response.data;
  }

  static async getProductById(id: string | number) {
    const response = await Api.get(`/api/products/row/${id}`);
    return response.data;
  }

  static async getProductsPrices(id: string | number) {
    const response = await Api.get(`/api/products/row/${id}/prices`);
    return response.data;
  }

  static async getGroups() {
    const response = await Api.get("/api/products/groups");
    return response.data;
  }

  static async updateProduct(payload: Product) {
    const response = await Api.put("/api/products/", payload);
    return response.data;
  }

  static async createProduct(payload: Product) {
    const response = await Api.post("/api/products/", payload);
    return response.data;
  }

  static async deleteProduct(productId: number) {
    const response = await Api.delete("/api/products/", { params: { productId } });
    return response.data;
  }

  static async updateGroup(payload: Category) {
    const response = await Api.put("/api/products/group", payload);
    return response.data;
  }

  static async addGroup(name: string) {
    const response = await Api.post("/api/products/group", { name });
    return response.data;
  }

  static async deleteGroup(groupId: number) {
    const response = await Api.delete(`/api/products/group/${groupId}`);
    return response.data;
  }

  static async updatePrice(price: ProductPriceBase) {
    const response = await Api.put(`/api/products/price`, price);
    return response.data;
  }

  static async createPrice(price: ProductPriceBase) {
    const response = await Api.post(`/api/products/price`, price);
    return response.data;
  }

  static async deletePrice(priceId: number) {
    const response = await Api.delete(`/api/products/price`, { params: { priceId } });
    return response.data;
  }
}
