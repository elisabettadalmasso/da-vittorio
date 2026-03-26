import "./ChiSiamo.css";
import { gallery } from "../components/data/gallery";
import Picture from "../components/Picture";
import { Helmet } from 'react-helmet-async';

function ChiSiamo() {
  return (
    <>
      <Helmet>
        <title>Chi Siamo - Da Vittorio | La Nostra Storia</title>
        <meta
          name="description"
          content="Una famiglia, una cucina, un territorio. Gianni in cucina, Marcella in sala, Lorenzo sommelier. Pasta fresca fatta a mano ogni giorno nel cuore della Val Tanaro."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Chi Siamo - Da Vittorio" />
        <meta property="og:description" content="Una famiglia, una cucina, un territorio. La nostra storia di passione e tradizione." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ristorantedavittorio.it/chisiamo" />
        <meta property="og:image" content="https://www.ristorantedavittorio.it/family.jpeg" />
      </Helmet>
      {/* BLOCCO 1 */}
      <section className="about-block">
        <div className="about-text">
          <h2 className="title-storia">La Nostra Storia</h2>

          <p className="p-storia">
            Siamo un ristorante a conduzione familiare. Lorenzo guida la sala e la cantina come direttore di sala e{" "}
            <strong>Sommelier</strong>, Gianni dirige la cucina, e Marcella si occupa dell'accoglienza e dell'armonia degli
            spazi, perché il comfort — come il servizio — fa parte dell'esperienza.
          </p>

          <p className="p-storia">
            A Nucetto abbiamo trovato la dimensione perfetta per esprimere ciò che davvero ci rappresenta.
          </p>

          <p className="manifesto">La nostra terra nel vostro piatto</p>

          <p className="p-storia">
            È questa la frase che riassume la nostra filosofia: portare in tavola prodotti autentici del territorio,
            lavorati con rispetto, attenzione e sensibilità.
          </p>

          <p className="p-storia">
            Lorenzo, direttore di sala e Sommelier, dedica gran parte del suo tempo alla ricerca e allo
            studio del territorio. Nel corso degli anni ha costruito rapporti diretti con contadini e allevatori della Val
            Tanaro, selezionando materie prime di altissima qualità, fresche e profondamente legate alla stagionalità.
          </p>
        </div>

        <div className="about-media"
          data-aos="zoom-out" data-aos-daley="100"
        >
          <Picture
            photo="/gallery/famiglia/family.avif"
            fallback="/family.jpeg"
            alt="Immagine della famiglia"
            className="about-img"
          />
        </div>
      </section>

      {/* BLOCCO 2 (reverse) */}
      <section className="about-block reverse">
        <div className="about-text">
          <p className="p-storia">
            In cucina c'è Gianni, cresciuto tra i profumi e i sapori della valle. La sua è una cucina che parte dai ricordi
            della tradizione e li interpreta con sensibilità e tecnica, cercando sempre equilibrio, eleganza e rispetto
            profondo per la materia prima.
          </p>

          <p className="p-storia">
            Marcella è la presenza che custodisce l'atmosfera del ristorante: con attenzione costante ai dettagli si prende
            cura degli ambienti e dell'accoglienza, contribuendo a creare quell'equilibrio che permette agli ospiti di
            sentirsi davvero a proprio agio.
          </p>
        </div>

        <div className="about-media"
          data-aos="zoom-out" data-aos-daley="100">
          <Picture
            photo="/gallery/piatti/crudaBella.avif"
            fallback="/crudaBella.png"
            alt="Dettaglio di un piatto"
            className="about-img"
          />
        </div>
      </section>

      {/* BLOCCO 3 */}
      <section className="about-block">
        <div className="about-text">
          <p className="p-storia">
            Tutto ciò che arriva in tavola è preparato interamente da noi. La pasta fresca viene lavorata a mano ogni
            giorno, con la stessa dedizione di sempre: è il cuore della nostra cucina.
          </p>

          <p className="p-storia">
            Tra i piatti che meglio raccontano il nostro modo di lavorare c'è il nostro <strong>"Ramen Piemontese"</strong>,
            nato dall'incontro tra studio, tecnica e territorio. Un piatto che unisce suggestioni lontane con ingredienti e
            sapori profondamente legati alla nostra valle.
          </p>

          <p className="p-storia">
            In contrappunto, il nostro grande classico: i <strong>Tajarin al Tartufo</strong>, sottilissimi,
            dorati e fatti a mano, esaltati da pochi elementi essenziali che permettono al profumo del tartufo di essere
            protagonista. Un piatto che rappresenta la tradizione più autentica della nostra cucina.
          </p>

          <p className="p-storia">
            Molte delle materie prime provengono da piccoli produttori locali della Val Tanaro, persone che conosciamo e con
            cui condividiamo valori e rispetto per la stagionalità.
          </p>

          <p className="p-storia">
            Non smettiamo mai di formarci e di cercare nuovi stimoli. L'eleganza si costruisce con lo studio, con
            l'attenzione e con la volontà di migliorarsi ogni giorno.
          </p>

          <p className="p-storia">
            Tradizione e innovazione convivono, ma ciò che non cambia è il nostro modo di stare insieme: come una vera
            famiglia, dentro e fuori dalla cucina.
          </p>

          <p className="p-storia">
            Il nostro desiderio è semplice: portare in tavola la verità della nostra terra, con cura, passione e rispetto.
          </p>
        </div>

        <div className="about-media"
          data-aos="zoom-out" data-aos-daley="100">
          <Picture
            photo="/gallery/piatti/cantinaPorta.avif"
            fallback="/gallery/cantinaPorta.jpeg"
            alt="Cantina dei Vini"
            className="about-img"
          />
        </div>
      </section>

      <hr className="divider" />

      {/* GALLERY FINALE */}
      <section id="immagini" className="about-gallery">
        {gallery.map((photo) => (
          <Picture
            key={photo.id}
            photo={photo.photo}
            fallback={photo.fallback}
            alt={photo.alt}
            className={photo.big ? "photo-big" : ""}
          />
        ))}
      </section>
    </>
  );
}

export default ChiSiamo;