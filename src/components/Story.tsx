import Link from "next/link";
import "./Story.css";

export default function Story() {
  return (
    <section className="story-home">
        <div className="container">
        <h2>La nostra storia</h2>
        <div className="sep"></div>
        <div className="story-text">
          <p>
            Una famiglia, una cucina, un territorio. In cucina papà Gianni, da
            sempre legato ai sapori della Val Tanaro. In sala mamma Marcella,
            anima dell'accoglienza, pronta a farvi sentire parte della casa.
            Accanto a loro Lorenzo, che racconta ogni piatto con passione e cura
            gli abbinamenti della cantina con competenza e attenzione. La nostra
            pasta fresca è lavorata a mano ogni giorno. I ravioli al tovagliolo
            parlano da soli. I tajarin al tartufo sono il nostro simbolo.
            Tradizione, eleganza e calore familiare convivono in ogni dettaglio.
          </p>
          <Link href="/chisiamo">Leggila tutta</Link>
        </div>
        </div>
      </section>
     
  )
}