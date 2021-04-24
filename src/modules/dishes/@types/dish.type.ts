export interface IDish {
  title: string;
  description: string;
  price: number;
  image: string;
  id: number;
}

export interface IDishGroup {
  groupTitle: string;
  id: string;
  dishes: IDish[];
}

export interface ISelectedDish extends IDish {
  count: number;
}
