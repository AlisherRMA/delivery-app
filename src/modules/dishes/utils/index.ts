import { ISelectedDish } from "../@types/dish.type";
/**
 * @returns returns items index if the item was found, otherwise returns -1
 */
export function findDishIndex(selectedDishes: ISelectedDish[], _dish: ISelectedDish): number {
  let itemIndex = -1;
  selectedDishes.some((currentDish, i) => {
    if (currentDish.id === _dish.id) return (itemIndex = i);
  });
  return itemIndex;
}
