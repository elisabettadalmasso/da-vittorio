import type { Metadata } from "next";
import MenuClient from "./MenuClient";

export const metadata: Metadata = {
  title: "Menu - Piatti e Specialità | Ristorante Da Vittorio",
  description:
    "Scopri il nostro menu: tajarin al tartufo, ramen piemontese, finanziera alla Vittorio. Cucina piemontese autentica con pasta fresca fatta a mano. Menu degustazione disponibili.",
  keywords:
    "menu ristorante, tajarin tartufo, ramen piemontese, cucina piemontese, menu degustazione, nucetto",
  openGraph: {
    title: "Menu - Piatti e Specialità | Ristorante Da Vittorio",
    description:
      "Tajarin al tartufo, ramen piemontese, finanziera alla Vittorio e pasta fresca fatta a mano ogni giorno.",
    type: "website",
    locale: "it_IT",
    url: "https://da-vittorio.vercel.app/menu",
  },
};

export default function MenuPage() {
  return <MenuClient />;
}