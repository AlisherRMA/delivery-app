import { IDishGroup } from "../@types/dish.type";

export const dishesHardcodedList: IDishGroup[] = [
  {
    groupTitle: "Комбо",
    id: "combo",
    dishes: [
      {
        id: 1,
        title: "Дабл пицца комбо",
        description: "2 пиццы + Coca-cola 1L",
        price: 5400,
        image: "https://wolt-menu-images-cdn.wolt.com/menu-images/5d5d280a3e6e1ae7b6c4f413/01e4e394-06db-11eb-985f-d6216456f19d_wolt.jpeg",
      },
      {
        id: 2,
        title: "Комбо на двоих",
        description: "2 твистера+пицца+2 напитка на выбор",
        price: 2220,
        image: "https://wolt-menu-images-cdn.wolt.com/menu-images/5d5d280a3e6e1ae7b6c4f413/212aca5c-06db-11eb-94e6-da5df6482bd8_wolt2.jpeg",
      },
      {
        id: 3,
        title: "Семейное комбо",
        description: "2 бургера+пицца+2 закуски+Coca-cola 1L",
        price: 4490,
        image: "https://wolt-menu-images-cdn.wolt.com/menu-images/5d5d280a3e6e1ae7b6c4f413/33179cf4-06db-11eb-812a-2e2368dfd842_wolt3.jpeg",
      },
    ],
  },
  {
    groupTitle: "Горячие закуски",
    id: "hot-dishes",
    dishes: [
      {
        id: 4,
        title: "Начос",
        description: "Кукурузные чипсы, сырный соус, гуакомоле, сальса, специи",
        price: 1800,
        image: "https://wolt-menu-images-cdn.wolt.com/menu-images/5d5d280a3e6e1ae7b6c4f413/257d7846-a200-11eb-af06-8add261f58af______.jpeg",
      },
      {
        id: 5,
        title: "Фрики Фри",
        description: "Картофельные лодочки, острый соус баффало, соус ранч, сыр чеддер",
        price: 1100,
        image: "https://wolt-menu-images-cdn.wolt.com/menu-images/5d5d280a3e6e1ae7b6c4f413/b3554bee-e14e-11ea-a544-2a72ab5d0f60__________.jpeg",
      },
      {
        id: 6,
        title: "Цветная Капуста Баффало",
        description: "Жареная цветная капуста в остром соусе баффало",
        price: 1100,
        image: "https://wolt-menu-images-cdn.wolt.com/menu-images/5d5d280a3e6e1ae7b6c4f413/257d7846-a200-11eb-af06-8add261f58af______.jpeg",
      },
    ],
  },
  {
    groupTitle: "БУРГЕРЫ",
    id: "burgers",
    dishes: [
      {
        id: 7,
        title: "Вегетарианский халапеньо чизбургер",
        description:
          "Вегетарианский фарш из нута, зеленой чечевицы, фасоли, шампиньонов, овсянки, кукурузного крахмала свеклы и специй, сыр чеддер, булочка бриошь, красный лук, халапеньо, соус баффало, салат микс",
        price: 2200,
        image: "https://wolt-menu-images-cdn.wolt.com/menu-images/5d5d280a3e6e1ae7b6c4f413/c64bc3d4-7039-11eb-a658-161f68c5d95d_dsc_2115_edit_2.jpeg",
      },
      {
        id: 8,
        title: "Бургер острый",
        description: "Свежая булочка бриошь, куриное филе в панировке и специях, маринованные огурцы, острый соус баффало",
        price: 2200,
        image: "https://wolt-menu-images-cdn.wolt.com/menu-images/5d5d280a3e6e1ae7b6c4f413/7a5fd744-e150-11ea-b36d-d2d2d7913cba_______________.jpeg",
      },
      {
        id: 9,
        title: "CoCo бургер",
        description: "Свежая булочка бриошь, куриное филе в панировке и специях, чеддер, томаты",
        price: 2200,
        image: "https://wolt-menu-images-cdn.wolt.com/menu-images/5d5d280a3e6e1ae7b6c4f413/a24028ae-e150-11ea-b263-1e9fff1aa537____________.jpeg",
      },
    ],
  },
];
