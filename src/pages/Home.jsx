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
    return (
        <>
            <div className="start">
                <h1>Sapori autentici, radici profonde.</h1>
                <h3>Un viaggio nei profumi e nei colori della nostra terra.</h3>
            </div>
            <section className="storia-home">
                <h2 className="titolo-storia">La nostra storia</h2>
                <div className="storia-sep"></div>
                <div className="testo-storia">
                    <p className="mini-storia">Una famiglia, una cucina, un territorio.
                        In cucina papà Gianni, da sempre legato ai sapori della Val Tanaro. In sala mamma Marcella, anima dell’accoglienza, pronta a farvi sentire parte della casa. Accanto a loro Lorenzo, che racconta ogni piatto con passione e cura gli abbinamenti della cantina con competenza e attenzione. La nostra pasta fresca è lavorata a mano ogni giorno. I ravioli al tovagliolo parlano da soli. I tajarin al tartufo sono il nostro simbolo.
                        Tradizione, eleganza e calore familiare convivono in ogni dettaglio.</p>
                    <Link to="/Chisiamo" className="link-storia">Leggila tutta</Link>
                </div>
            </section>
            <section className="specialità">
                <h2 className="titolo-specialità">Le nostre specialità</h2>
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