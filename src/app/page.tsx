import Link from "next/link";
import "./Home.css";
import { specialties, Specialty } from "@/components/data/specialties";
import { awards, Award } from "@/components/data/awards";
import { partner } from "@/components/data/partner";
import Picture from "@/components/Picture";

export default function Home() {
  return (
    <>
      <div className="start">
        <h1>Sapori autentici, radici profonde.</h1>
        <h2>Un viaggio nei profumi e nei colori della nostra terra.</h2>
      </div>
      <section className="story-home">
        <h2>La nostra storia</h2>
        <div className="sep"></div>
        <div className="story-text">
          <p >
            Una famiglia, una cucina, un territorio. In cucina papà Gianni, da
            sempre legato ai sapori della Val Tanaro. In sala mamma Marcella,
            anima dell'accoglienza, pronta a farvi sentire parte della casa.
            Accanto a loro Lorenzo, che racconta ogni piatto con passione e cura
            gli abbinamenti della cantina con competenza e attenzione. La nostra
            pasta fresca è lavorata a mano ogni giorno. I ravioli al tovagliolo
            parlano da soli. I tajarin al tartufo sono il nostro simbolo.
            Tradizione, eleganza e calore familiare convivono in ogni dettaglio.
          </p>
          <Link href="/chisiamo">
            Leggila tutta
          </Link>
        </div>
      </section>
      <section className="specialties">
        <h2>Le nostre specialità</h2>
        <div className="sep"></div>
        <div className="specialties-grid">
          {specialties.map((specialty: Specialty, index : number) => (
            <Link
              href="/menu"
              className="specialties-card"
              key={specialty.id}
              data-aos="fade-left"
              data-aos-delay={index * 100}
            >
              <Picture
                photo={specialty.photo}
                fallback={specialty.fallback}
                alt={specialty.alt}
              />
              <h3>{specialty.name}</h3>
              <p>{specialty.description}</p>
            </Link>
          ))}
          <Link href="/menu" className="link-menu">
            Scopri il nostro menu →
          </Link>
        </div>
      </section>

      <section className="awards">
        <h2 >Riconoscimenti</h2>
        <div className="sep"></div>
        <div className="awards-grid">
          {awards.map((award: Award, index : number) => (
            <div
              className="award-card"
              key={award.id}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <Picture
                photo={award.photo}
                fallback={award.fallback}
                alt={award.alt}
              />
              <h3>{award.name}</h3>
              <p>{award.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="ambassador">
        <h2>I Nostri Partner</h2>
        <div className="sep"></div>
        <div className="ambassador-grid">
          {partner.map((p, index) => (
            <div
              className="ambassador-card"
              key={p.id}
              data-aos="flip-left"
              data-aos-delay={index * 100}
            >
              <Picture
                photo={p.fotoPersona}
                fallback={p.fallbackPersona}
                alt={p.altPersona}
              />
              <Picture
                photo={p.logo}
                fallback={p.fallbackLogo}
                alt={p.altLogo}
              />
            </div>
          ))}
        </div>
      </section>
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
