export type CatalogItem = {
  name: string;
  image: string;
  tag: string;
  color: number;
  price: number;
};

export const catalog = [
  {
    name: "Chair",
    image: "./chair-image.webp",
    tag: "Best seller",
    color: 3,
    price: 120,
  },
  {
    name: "Lamp",
    image: "./lamp-1.webp",
    tag: "Best seller",
    color: 5,
    price: 50,
  },
  {
    name: "Lamp",
    image: "./lamp-2.webp",
    tag: "Best price",
    color: 2,
    price: 60,
  },
  {
    name: "Sofa",
    image: "./sofa-1.webp",
    tag: "Best seller",
    color: 9,
    price: 220,
  },
  {
    name: "Chair",
    image: "./chair-2.webp",
    tag: "Best price",
    color: 15,
    price: 40,
  },
  {
    name: "Lamp",
    image: "./lamp-3.webp",
    tag: "Top rated",
    color: 3,
    price: 120,
  },
];
