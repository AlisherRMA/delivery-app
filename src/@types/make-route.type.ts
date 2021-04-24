import { IModule } from "./module.type";

type LazyComponent = () => Promise<typeof import("*.vue")>;

export interface MakeRouteOptions {
  module: IModule;
  component?: LazyComponent;
  meta?: any;
}
