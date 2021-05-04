import { SelectedProduct } from "../@types/product.type";
/**
 * @returns returns items index if the item was found, otherwise returns -1
 */
export function findDishIndex(selectedDishes: SelectedProduct[], _dish: SelectedProduct): number {
  let itemIndex = -1;
  selectedDishes.some((currentDish, i) => {
    if (currentDish.id === _dish.id) return (itemIndex = i);
  });
  return itemIndex;
}
