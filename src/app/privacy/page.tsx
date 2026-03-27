import "./Privacy.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Ristorante Da Vittorio",
  description:
    "Informativa sulla privacy e trattamento dei dati personali del Ristorante Da Vittorio. Conforme al GDPR.",
  keywords: "privacy policy, gdpr, trattamento dati, informativa privacy",
  openGraph: {
    title: "Privacy Policy | Ristorante Da Vittorio",
    description:
      "Informativa sulla privacy e trattamento dei dati personali. Conforme al GDPR.",
    type: "website",
    locale: "it_IT",
    url: "https://da-vittorio.vercel.app/privacy",
  },
};

export default function Privacy() {
  return (
    <div className="page-wrapper">
      <div className="privacy-container">
        <h1>Privacy Policy</h1>

        <h2>Titolare del trattamento</h2>
        <p>
          Ristorante Da Vittorio, Via Nazionale 5, 12070 Nucetto (CN). Per
          informazioni: +39 0174 76239
        </p>

        <h2>Dati raccolti</h2>
        <p>
          Questo sito non raccoglie dati personali tramite form. Vengono
          raccolti automaticamente dati tecnici anonimi (indirizzo IP, tipo di
          browser) necessari al funzionamento del sito.
        </p>

        <h2>Cookie</h2>
        <p>
          Il sito utilizza solo cookie tecnici necessari al funzionamento. Non
          vengono utilizzati cookie di profilazione o di terze parti.
        </p>

        <h2>Diritti dell'utente</h2>
        <p>
          L'utente ha diritto di accesso, rettifica e cancellazione dei propri
          dati ai sensi del GDPR (Reg. UE 2016/679). Per esercitare i propri
          diritti contattare il titolare ai recapiti indicati.
        </p>

        <h2>Contatti</h2>
        <p>
          Per qualsiasi informazione relativa al trattamento dei dati: +39 0174
          76239
        </p>
      </div>
    </div>
  );
}
