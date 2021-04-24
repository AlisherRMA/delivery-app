import { deepCopy } from ".";
import { getDeepValue } from "./object.utils";

/**
 * Группировка массива по заданному полю.
 * @param arr
 * @param criteria - поле по которому будет группировака. Может передаваться как обычная строка, так и путь к нужному полю
 *
 * @example groupBy(attachmentsList, "attachment.type.codename")
 */
export const groupBy = function(arr, criteria) {
  return arr.reduce(function(obj, item) {
    // Проверка на то, является ли критерий функцией элемента или же свойством элемента
    const key = typeof criteria === "function" ? criteria(item) : getDeepValue(item, criteria);
    // Если свойство не создано, создаем его.
    if (!Object.prototype.hasOwnProperty.call(obj, key)) obj[key] = [];
    // Добавление значения в объект
    obj[key].push(item);
    // Возвращение объекта для следующего шага
    return obj;
  }, {});
};

function getter(obj, ...args) {
  let v = obj;
  for (let i = 0; i < args.length; i++) {
    if (!v) return null;
    v = v[args[i]];
  }
  return v || {};
}

/**
 *
 * @param array: object[] - array that needs to be filtered
 * @param filterKeyPath: string | string[] - path to a nested property key(any level??)
 *                      denoted as a string or an array of strings, where each entry is a key of a nested prop
 * @param childrenKey: key of the nested array (if there's any) containing objects of the same "type"
 *                     as initial array's first level elements. Defaults to "children" (array.children)
 * @returns filtered array
 */

export const getFilteredArray = (array, filterKeyPath, childrenKey = "children") => {
  const [filterKey, ...nestings] = typeof filterKeyPath === "string" ? [filterKeyPath, []] : deepCopy(filterKeyPath).reverse();

  const result = typeof filterKeyPath === "string" ? array.filter(item => filterKey in item) : array.filter(item => filterKey in getter(item, nestings));

  result.forEach(el => {
    if (childrenKey in el && Array.isArray(el[childrenKey])) {
      const filteredChildren = getFilteredArray(el[childrenKey], filterKeyPath, childrenKey);
      if (filteredChildren.length) {
        el[childrenKey] = filteredChildren;
      } else {
        delete el[childrenKey];
      }
    }
  });

  return result;
};
