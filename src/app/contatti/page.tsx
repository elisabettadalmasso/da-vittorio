
import ContactsClient from "./ContactsClient";
import "./Contatti.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatti e Prenotazioni | Ristorante Da Vittorio",
  description:
    "Prenota il tuo tavolo al Ristorante Da Vittorio a Nucetto. Via Nazionale 5, 12070 Nucetto (CN). Tel: +39 351 1159457. Aperto Mer-Dom.",
  keywords:
    "prenotazioni ristorante, contatti da vittorio, nucetto cuneo, via nazionale nucetto",
  openGraph: {
    title: "Contatti e Prenotazioni | Ristorante Da Vittorio",
    description:
      "Prenota il tuo tavolo. Via Nazionale 5, Nucetto (CN). Tel: +39 351 1159457",
    type: "website",
    locale: "it_IT",
    url: "https://da-vittorio.vercel.app/contatti",
  },
};

export default function Contatti() {
  return (
    
      <ContactsClient />
  );
}
