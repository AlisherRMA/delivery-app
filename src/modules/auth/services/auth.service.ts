import { Api } from "@/services/api.service";
import router from "../../../router/index";

export class AuthService {
  private static TOKEN = "ezhBearerAuthToken";

  public static getAuthToken() {
    return localStorage.getItem(this.TOKEN);
  }

  public static setAuthToken(token: string) {
    localStorage.setItem(this.TOKEN, token);
  }

  public static isAuthorized() {
    const res = this.getAuthToken();
    if (!res) return false;
    return true;
  }

  public static async singin(email: string, password: string) {
    const res = await Api.post("/api/auth/signin", { email, password });
    if (res.data.accessToken) {
      this.setAuthToken(res.data.accessToken);
      router.push({ name: "Management" });
    }

    return res;
  }
}
