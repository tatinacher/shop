export type CatalogItem = {
  category: string;
  color: number;
  image: string;
  name: string;
  price: number;
  tag: string;
};

export const catalog = [
  {
    name: "Chair",
    image: "./chair-image.webp",
    tag: "Best seller",
    color: 3,
    price: 120,
    category: "chair",
  },
  {
    name: "Lamp",
    image: "./lamp-1.webp",
    tag: "Best seller",
    color: 5,
    price: 50,
    category: "light",
  },
  {
    name: "Lamp",
    image: "./lamp-2.webp",
    tag: "Best price",
    color: 2,
    price: 60,
    category: "light",
  },
  {
    name: "Sofa",
    image: "./sofa-1.webp",
    tag: "Best seller",
    color: 9,
    price: 220,
    category: "couch",
  },
  {
    name: "Chair",
    image: "./chair-2.webp",
    tag: "Best price",
    color: 15,
    price: 40,
    category: "chair",
  },
  {
    name: "Lamp",
    image: "./lamp-3.webp",
    tag: "Top rated",
    color: 3,
    price: 120,
    category: "light",
  },
];
