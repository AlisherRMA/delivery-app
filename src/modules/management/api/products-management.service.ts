import { Api } from "@/services/api.service";
// import { ProductGroups } from "../@types/product.type";
import { Category } from "../../dishes/@types/product.type";

export class ProductsManagementService {
  static async getProducts() {
    const response = await Api.get("/api/products/row");
    return response.data;
  }

  static async getGroups() {
    const response = await Api.get("/api/products/groups");
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
}
