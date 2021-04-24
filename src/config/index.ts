export class Config {
  public static get isProduction() {
    return process.env.NODE_ENV == "production";
  }
}
