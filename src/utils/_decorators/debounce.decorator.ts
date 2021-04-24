/* eslint-disable */
import { wait } from "..";

/**
 * Debouncer. Должно декорироваться на событие "input"
 * @param modelName - название модели(v-model), куда записывается searchString
 * @param minimumLength - минимальная длина строки для того, чтобы поиск сработал(по умолчанию = 3)
 * @returns
 */
export function Debounce(modelName: string, minimumLength = 3) {
  return (_target: any, _key: string, descriptor: PropertyDescriptor) => {
    const method = descriptor.value;

    descriptor.value = async function(...args: any[]) {
      const self = this as any;
      try {
        if (args[0] && args[0]?.length < minimumLength) return;
        await wait(1000);
        if (args[0] !== self[modelName]) return;
        const result = await method.apply(this, args);
        return result;
      } catch (error) {
        console.error(error);
        return { error };
      }
    };
  };
}
