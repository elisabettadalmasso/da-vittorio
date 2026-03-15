import "./Home.css"
import { Link } from "react-router-dom";

function Home() {
    const specialità = [
        {
            id: 1,
            nome: 'Il Nostro "Ramen" Piemontese',
            descrizione: "Consommé di Funghi Orientali servito caldo, contenente ingredienti selezionati da noi per dare gusto e una buona leggerezza al palato.",
            immagine: "ramen.jpg"
        },
        {
            id: 2,
            nome: "Tajarin al Tartufo Nero",
            descrizione: "Fatti a mano ogni giorno, sottili e dorati, esaltati dal burro di Beppino Occelli e dal profumo profondo del tartufo nero. Un piatto che racconta il territorio con eleganza.",
            immagine: "tagliolinitartufo.jpg"
        },
        {
            id: 3,
            nome: 'Finanziera "Alla Vittorio"',
            descrizione: "Preparata secondo la tradizione della nostra vallata, con carni selezionate e profumi intensi, sfumata al Marsala e completata con cervello fritto.",
            immagine: "finanziera.jpg",
        }
    ]

    const premi = [
        {
            id: 1,
            nome: 'Premio "Cellar Door" 2026',
            descrizione: "Miglior Carta Vini d'Italia 2026",
            immagine: "cellarDoor.jpeg"
        },
        {
            id: 2,
            nome: "Corona Radiosa 2026",
            descrizione: "Il Golosario Ristoranti di Marco Gatti e Paolo Massobrio",
            immagine: "coronaRadiosa.jpeg"
        },
        {
            id: 3,
            nome: "Miglior tavola dell'anno",
            descrizione: "Miglior tavola dell'anno come categoria 'Trattoria di Lusso' per la Guida Il Golosario di Marco Gatti e Paolo Massobrio",
            immagine: "ilGolosario.jpeg"
        },
        {
            id: 4,
            nome: "Travelers' Choice Awards",
            descrizione: "Tripadvisor Travelers' Choice Awards 2025",
            immagine: "traverlersChioce.jpeg"
        },
        {
            id: 5,
            nome: "Best of the Best",
            descrizione: "Travelers' Choice Best of the Best Winner 2023",
            immagine: "bestOfTheBest.jpeg"
        },
        {
            id: 6,
            nome: "Chiocciola Slow Food",
            descrizione: "Chiocciola Guida Osterie d'Italia 2026 Slow Food",
            immagine: "osterieItalia.jpeg"
        },
        {
            id: 7,
            nome: "Guida 'Fuoricasello'",
            descrizione: "Presenti nella Guida Fuoricasello della Famiglia Longo",
            immagine: "fuoriCasello.jpeg"
        },
        {
            id: 8,
            nome: "Guida Untold",
            descrizione: "Presenti nella Guida 'Untold' della rivista online 'Decanto', con il premio di 'Cellar Door' come migliore carta vini d'italia per la regione Piemonte",
            immagine: "untold.jpeg"
        },
        {
            id: 9,
            nome: "Falstaff",
            descrizione: "Presenti nella famosa guida eno-gastronomica tedesca Falstaff",
            immagine: "falstaff.jpeg"
        },
        {
            id: 10,
            nome: "I ristoranti della tavolozza 2026",
            descrizione: "Presenti in Guida Ristoranti della Tavolozza 2026",
            immagine: "tavolozza.jpeg"
        }
    ]

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
                            <img src={piatto.immagine} alt={piatto.nome} />
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
                            <img src={premio.immagine} alt={premio.nome} />
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
                    <div className="ambassador-card">
                        <img src="LorenzoGianni.jpeg" alt="Vecchia Scuola" />
                        <img src="vermounthLogo.jpeg" alt="Logo Vecchia Scuola" className="brand-logo" />
                    </div>
                    <div className="ambassador-card">
                        <img src="LorenzoChampagne.jpeg" alt="Champagne Mailly" />
                        <img src="champagneLogo.jpg" alt="Logo Mailly" className="brand-logo" />
                    </div>
                     <div className="ambassador-card">
                        <img src="lorenzoBordiga.jpeg" alt="Bordiga" />
                        <img src="bordigaLogo.jpeg" alt="Logo Bordiga" className="brand-logo" />
                    </div>
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