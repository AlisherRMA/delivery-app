declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
declare module "*.json" {
  const value: any;
  export default value;
}

declare type Nullable<T> = T | null;

declare type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

declare module "vue-loading-spinner/src/components/*";
