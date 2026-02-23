import "./Home.css"
import {Link} from "react-router-dom";

function Home() {
    return (
        <>
            <div className="start">
                <h1>Sapori autentici, radici profonde.</h1>
                <h3>Un viaggio nei profumi e nei colori della nostra terra.</h3>
            </div>
            <section className="storia-home">
                <div className="testo-storia">
                    <h2 className="titolo-storia">La nostra storia</h2>
                    <p className="mini-storia">Una famiglia, una cucina, un territorio.
                        In cucina papà Gianni, da sempre legato ai sapori della Val Tanaro. In sala mamma Marcella, anima dell’accoglienza, pronta a farvi sentire parte della casa. Accanto a loro Lorenzo, che racconta ogni piatto con passione e cura gli abbinamenti della cantina con competenza e attenzione. La nostra pasta fresca è lavorata a mano ogni giorno. I ravioli al tovagliolo parlano da soli. I tajarin al tartufo sono il nostro simbolo.
                        Tradizione, eleganza e calore familiare convivono in ogni dettaglio.</p>
                    <Link to="/Chisiamo" className="link-storia">Leggila tutta</Link>    
                </div>

            </section>
        </>


    )
}
export default Home