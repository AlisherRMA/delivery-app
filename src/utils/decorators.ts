/* eslint-disable */
import baseModule from "@/store/base.module";
import { AxiosError } from "axios";
import { translate } from "./index";

/**
 * Для добавления анимации загрузки. Как параметр принимает название свойства, которое нужно мутировать.
 * @param loadablePropertyName - string
 * @returns
 */
export function Loadable(loadablePropertyName?: string) {
  return (_target: any, _key: string, descriptor: PropertyDescriptor) => {
    const method = descriptor.value;

    descriptor.value = async function(...args: any[]) {
      const self = this as any;
      try {
        if (loadablePropertyName && self[loadablePropertyName] === false) self[loadablePropertyName] = true;
        else baseModule.setLoadingStatus(true);
        const result = await method.apply(this, args);
        return result;
      } catch (error) {
        console.error(error);
        return { error };
      } finally {
        if (loadablePropertyName && self[loadablePropertyName] === true) self[loadablePropertyName] = false;
        else baseModule.setLoadingStatus(false);
      }
    };
  };
}

export const WithLoadingAnimation = Loadable();

export function Catch(handler?: HandlerFunction<any>) {
  return (_target: any, _key: string, descriptor: PropertyDescriptor) => {
    const method = descriptor.value;

    descriptor.value = async function(...args: any[]) {
      try {
        const result = await method(...args);
        return { result };
      } catch (error) {
        console.error(error);
        return { error };
      }
    };
  };
}

export const ApiCatch = Catch((e: AxiosError) => e.response);

/**
 * @description Decorator to return MessageValue
 */
export const ApiTranslate = Catch((e: AxiosError) => ({
  result: false,
  message: e.response ? translate(e.response.data.message).name : "",
}));

type HandlerFunction<H extends Error> = (error: H, ...args: any[]) => any;
