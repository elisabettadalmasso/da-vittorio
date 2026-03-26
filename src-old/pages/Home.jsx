import "./Home.css"
import { Link } from "react-router-dom";
import { specialties } from "../components/data/specialties";
import { awards } from "../components/data/awards";
import { partner } from "../components/data/partner"
import Picture from "../components/Picture";
import { Helmet } from 'react-helmet-async';

function Home() {
    return (
        <>
            <Helmet>
                <title>Da Vittorio - Ristorante a Nucetto | Cucina Piemontese Autentica</title>
                <meta
                    name="description"
                    content="Ristorante Da Vittorio a Nucetto: cucina piemontese tradizionale con tajarin al tartufo, finanziera e piatti del territorio. Carta vini premiata."
                />

                {/* Open Graph */}
                <meta property="og:title" content="Da Vittorio - Ristorante a Nucetto" />
                <meta property="og:description" content="Cucina piemontese autentica nel cuore della Val Tanaro" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.ristorantedavittorio.it/" />
                <meta property="og:image" content="https://www.ristorantedavittorio.it/gallery/piatti/ramen.jpg" />
            </Helmet>
            <div className="start">
                <h1>Sapori autentici, radici profonde.</h1>
                <h2>Un viaggio nei profumi e nei colori della nostra terra.</h2>
            </div>
            <section className="story-home">
                <h2 className="title-storia">La nostra storia</h2>
                <div className="storia-sep"></div>
                <div className="story-text">
                    <p className="mini-storia">Una famiglia, una cucina, un territorio.
                        In cucina papà Gianni, da sempre legato ai sapori della Val Tanaro. In sala mamma Marcella, anima dell'accoglienza, pronta a farvi sentire parte della casa. Accanto a loro Lorenzo, che racconta ogni piatto con passione e cura gli abbinamenti della cantina con competenza e attenzione. La nostra pasta fresca è lavorata a mano ogni giorno. I ravioli al tovagliolo parlano da soli. I tajarin al tartufo sono il nostro simbolo.
                        Tradizione, eleganza e calore familiare convivono in ogni dettaglio.</p>
                    <Link to="/chisiamo" className="link-storia">Leggila tutta</Link>
                </div>
            </section>
            <section className="specialties">
                <h2 className="title">Le nostre specialità</h2>
                <div className="specialties-sep"></div>
                <div className="specialties-grid">
                    {specialties.map((piatto, index) => (
                        <Link to="/menu"
                            className="specialties-card"
                            key={piatto.id}
                            data-aos="fade-left" data-aos-delay={index * 100}
                        >
                            <Picture
                                photo={piatto.photo}
                                fallback={piatto.fallback}
                                alt={piatto.alt}
                            />
                            <h3>{piatto.name}</h3>
                            <p>{piatto.description}</p>
                        </Link>
                    ))}
                    <Link to="/menu" className="link-menu">Scopri il nostro menu →</Link>
                </div>
            </section>

            <section className="awards">
                <h2 className="title">Riconoscimenti</h2>
                <div className="awards-sep"></div>
                <div className="awards-grid">
                    {awards.map((premio, index) => (
                        <div
                            className="premio-card"
                            key={premio.id}
                            data-aos="zoom-in" data-aos-delay={index * 100}
                        >
                            <Picture
                                photo={premio.photo}
                                fallback={premio.fallback}
                                alt={premio.alt}
                            />
                            <h3>{premio.name}</h3>
                            <p>{premio.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="ambassador">
                <h2 className="title">I Nostri Partner</h2>
                <div className="ambassador-sep"></div>
                <div className="ambassador-grid">
                    {partner.map((p, index) => (
                        <div
                            className="ambassador-card"
                            key={p.id}
                            data-aos="flip-left" data-aos-delay={index * 100}
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
                        <a href="tel:+39017476239" className="cta-btn">Chiama</a>
                        <a href="https://maps.app.goo.gl/XbwU174KbjS8jfNWA" target="_blank" rel="noopener noreferrer" className="cta-link">
                            Dove trovarci
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home