import "./Home.css"
import { Link } from "react-router-dom";
import { specialità } from "../components/data/specialita";
import { premi } from "../components/data/premi";
import {partner} from "../components/data/partner"

function Home() {
    

    

    return (
        <>
            <div className="start">
                <h1>Sapori autentici, radici profonde.</h1>
                <h2>Un viaggio nei profumi e nei colori della nostra terra.</h2>
            </div>
            <section className="storia-home">
                <h2 className="titolo-storia">La nostra storia</h2>
                <div className="storia-sep"></div>
                <div className="testo-storia">
                    <p className="mini-storia">Una famiglia, una cucina, un territorio.
                        In cucina papà Gianni, da sempre legato ai sapori della Val Tanaro. In sala mamma Marcella, anima dell’accoglienza, pronta a farvi sentire parte della casa. Accanto a loro Lorenzo, che racconta ogni piatto con passione e cura gli abbinamenti della cantina con competenza e attenzione. La nostra pasta fresca è lavorata a mano ogni giorno. I ravioli al tovagliolo parlano da soli. I tajarin al tartufo sono il nostro simbolo.
                        Tradizione, eleganza e calore familiare convivono in ogni dettaglio.</p>
                    <Link to="/chisiamo" className="link-storia">Leggila tutta</Link>
                </div>
            </section>
            <section className="specialità">
                <h2 className="titolo">Le nostre specialità</h2>
                <div className="specialita-sep"></div>
                <div className="specialità-grid">
                    {specialità.map((piatto) => (
                        <Link to="/menu" className="specialità-card" key={piatto.id}>
                            <picture>
                                <source srcSet={piatto.foto} type="image/avif" />
                            <img src={piatto.fallback} alt={piatto.alt} />
                            </picture>
                            <h3>{piatto.nome}</h3>
                            <p>{piatto.descrizione}</p>
                        </Link>
                    ))}
                    <Link to="/menu" className="link-menu">Scopri il nostro menu →</Link>
                </div>
            </section>

            <section className="premi">
                    <h2 className="titolo">Riconoscimenti</h2>
                    <div className="premi-sep"></div>
                    <div className="premi-grid">
                        {premi.map((premio) =>(
                            <div className="premio-card" key={premio.id}>
                                <picture>
                                    <source srcSet={premio.foto} type="image/avif" />
                            <img src={premio.fallback} alt={premio.alt} />
                            </picture>
                            <h3>{premio.nome}</h3>
                            <p>{premio.descrizione}</p>
                            </div>
                        ))}
                    </div>
            </section>

            <section className="ambassador">
                <h2 className="titolo">I Nostri Partner</h2>
                <div className="ambassador-sep"></div>
                <div className="ambassador-grid">
                    {partner.map((p) => (
                        <div className="ambassador-card" key={p.id}>
                            <picture>
                                <source  srcSet={p.fotoPersona} type="image/avif" />
                                <img src={p.fallbackPersona} alt={p.altPersona} />
                            </picture>
                            <picture>
                                <source srcSet={p.logo} type="image/avif"/>
                                <img src={p.fallbackLogo} alt={p.altLogo} />
                            </picture>

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