/**
 * Возвращает значение по заданному пути
 * @param object - объект
 * @param path - путь к значению
 *
 * @example
 * getDeepValue(addressData, "lastChangedUser.fullName.lastName")
 */
export function getDeepValue(object, path) {
  return path.split(".").reduce((res, prop) => res[prop], object);
}
