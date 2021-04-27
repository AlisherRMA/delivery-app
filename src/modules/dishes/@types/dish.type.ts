export interface IDish {
  title: string;
  description: string;
  price: number;
  image: string;
  id: number;
  detailedDescription?: string;
}

export interface IDishGroup {
  groupTitle: string;
  id: string;
  dishes: IDish[];
}

export interface ISelectedDish extends IDish {
  count: number;
}
