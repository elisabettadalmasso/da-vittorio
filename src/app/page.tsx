
import "./Home.css";
import { partner } from "@/components/data/partner";
import Picture from "@/components/Picture";
import type { Metadata } from "next";
import Hero from '@/components/hero'
import Story from "@/components/Story";
import Specialties from '@/components/Specialties';
import Awards from "@/components/Award";  
import Ambassador from "@/components/Ambassador";


export const metadata: Metadata = {
  title: "Ristorante Da Vittorio - Cucina Piemontese Autentica | Nucetto",
  description:
    "Ristorante a conduzione familiare a Nucetto (CN). Cucina piemontese autentica, pasta fresca fatta a mano, tajarin al tartufo e cantina selezionata. Prenota ora.",
  keywords:
    "ristorante nucetto, cucina piemontese, ramen piemontese, colle di nava, tajarin al tartufo, pasta fresca, val tanaro, ristorante cuneo",
  openGraph: {
    title: "Ristorante Da Vittorio - Cucina Piemontese Autentica",
    description:
      "Ristorante a conduzione familiare a Nucetto. Cucina piemontese autentica e pasta fresca fatta a mano.",
    type: "website",
    locale: "it_IT",
    url: "https://da-vittorio.vercel.app",
    siteName: "Ristorante Da Vittorio",
  },
};

export default function Home() {
  return (
    <>
    <Hero />
    <Story />
    <Specialties />
    <Awards />
    <Ambassador />
    
        <section className="home-cta">
          <div className="home-cta-content">
            <h2>Prepariamo per te un'esperienza unica.</h2>
            <p>Una tavola pronta ad accogliervi, nel cuore della Val Tanaro.</p>
            <div className="home-cta-actions">
              <a href="tel:+39017476239" className="cta-btn">
                Chiama
              </a>
              <a
                href="https://maps.app.goo.gl/XbwU174KbjS8jfNWA"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-link"
              >
                Dove trovarci
              </a>
            </div>
          </div>
        </section>
      
    </>
  );
}
