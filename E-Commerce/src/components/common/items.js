import i18n from "./LangConfig";
let idCounter = 0;

export const ITEMS = [
  {
    id: String(idCounter++),
    imageSrc: "../assets/car.svg",
    title: i18n.t("itemsArray.0.title"),
    price: 960,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: "",
    quantity: 0,
    type: i18n.t("itemsArray.0.type"),
    details: i18n.t("itemsArray.0.details"), },
  {
    id: String(idCounter++),
    imageSrc: "../assets/camera.svg",
    title: i18n.t("itemsArray.1.title"),
    price: 360,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: "",
    quantity: 0,
    type: i18n.t("itemsArray.1.type"),
    details:i18n.t("itemsArray.1.details"),},
  {
    id: String(idCounter++),
    imageSrc: "../assets/dogfood.svg",
    price: 100,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: "",
    quantity: 0,
    title: i18n.t("itemsArray.2.title"),
    type: i18n.t("itemsArray.2.type"),
    details: i18n.t("itemsArray.2.details"), 
  
  },
  {
    id: String(idCounter++),
    imageSrc: "../assets/labtop.svg",
    price: 700,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: "",
    quantity: 0,
    title: i18n.t("itemsArray.3.title"),
    type: i18n.t("itemsArray.3.type"),
    details: i18n.t("itemsArray.3.details"),
  },
  {
    id: String(idCounter++),
    imageSrc: "../assets/cream.svg",
    price: 500,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: "",
    quantity: 0,
    title: i18n.t("itemsArray.4.title"),
    type: i18n.t("itemsArray.4.type"),
    details: i18n.t("itemsArray.4.details"),},
  {
    id: String(idCounter++),
    imageSrc: "../assets/g-black.svg",
    price: 660,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 40,
    quantity: 0,
    title: i18n.t("itemsArray.5.title"),
    type: i18n.t("itemsArray.5.type"),
    details: i18n.t("itemsArray.5.details"),
  },
  {
    id: String(idCounter++),
    imageSrc: "../assets/jacket.svg",
    price: 660,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 40,
    quantity: 0,
    title: i18n.t("itemsArray.6.title"),
    type: i18n.t("itemsArray.6.type"),
    details: i18n.t("itemsArray.6.details"),
  },
  {
    id: String(idCounter++),
    imageSrc: "../assets/bookself.svg",
    price: 360,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 40,
    quantity: 0,
    title: i18n.t("itemsArray.7.title"),
    type: i18n.t("itemsArray.7.type"),
    details: i18n.t("itemsArray.7.details"),
  },
  {
    id: String(idCounter++),
    imageSrc: "../assets/headphones.svg",
    price: 160,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 40,
    quantity: 0,
    title: i18n.t("itemsArray.8.title"),
    type: i18n.t("itemsArray.8.type"),
    details: i18n.t("itemsArray.8.details"),
  },
  {
    id: String(idCounter++),
    imageSrc: "../assets/bag.svg",
    price: 1160,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 40,
    quantity: 0,
    title: i18n.t("itemsArray.9.title"),
    type: i18n.t("itemsArray.9.type"),
    details: i18n.t("itemsArray.9.details"),
  },
  {
    id: String(idCounter++),
    imageSrc: "../assets/coat.svg",
    price: 360,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 40,
    quantity: 0,
    title: i18n.t("itemsArray.10.title"),
    type: i18n.t("itemsArray.10.type"),
    details: i18n.t("itemsArray.10.details"),
  },
  {
    id: String(idCounter++),
    imageSrc: "../assets/g-colored.svg",
    price: 160,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 40,
    quantity: 0,
    title: i18n.t("itemsArray.11.title"),
    type: i18n.t("itemsArray.11.type"),
    details: i18n.t("itemsArray.11.details"),

  },
  {
    id: String(idCounter++),
    imageSrc: "../assets/keyboard.svg",
    price: 1160,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 35,
    quantity: 0,
    title: i18n.t("itemsArray.12.title"),
    type: i18n.t("itemsArray.12.type"),
    details: i18n.t("itemsArray.12.details"),
  },
  {
    id: String(idCounter++),
    imageSrc: "../assets/tv.svg",
    price: 400,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 30,
    quantity: 0,
    title: i18n.t("itemsArray.13.title"),
    type: i18n.t("itemsArray.13.type"),
    details: i18n.t("itemsArray.13.details"),

  },
  {
    id: String(idCounter++),
    imageSrc: "../assets/chair.svg",
    price: 400,
    stars: Math.floor(Math.random() * 5),
    rates: Math.floor(Math.random() * 100),
    discount: 25,
    quantity: 0,
    title: i18n.t("itemsArray.14.title"),
    type: i18n.t("itemsArray.14.type"),
    details: i18n.t("itemsArray.14.details"),
  },
];
