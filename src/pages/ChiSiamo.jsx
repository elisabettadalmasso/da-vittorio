import "./Chisiamo.css";

function ChiSiamo() {
  return (
    <>
      {/* BLOCCO 1 */}
      <section className="chi-blocco">
        <div className="chi-testo">
          <h2 className="titolo-storia">La Nostra Storia</h2>

          <p className="p-storia">
            Siamo un ristorante a conduzione familiare. Lorenzo guida la sala e la cantina come direttore di sala e{" "}
            <strong>Sommelier</strong>, Gianni dirige la cucina, e Marcella si occupa dell’accoglienza e dell’armonia degli
            spazi, perché il comfort — come il servizio — fa parte dell’esperienza.
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

        <div className="chi-media">
          <img
            src="/family.jpeg"
            alt="Immagine della famiglia"
            className="chi-img"
          />
        </div>
      </section>

      {/* BLOCCO 2 (reverse) */}
      <section className="chi-blocco reverse">
        <div className="chi-testo">
          <p className="p-storia">
            In cucina c’è Gianni, cresciuto tra i profumi e i sapori della valle. La sua è una cucina che parte dai ricordi
            della tradizione e li interpreta con sensibilità e tecnica, cercando sempre equilibrio, eleganza e rispetto
            profondo per la materia prima.
          </p>

          <p className="p-storia">
            Marcella è la presenza che custodisce l’atmosfera del ristorante: con attenzione costante ai dettagli si prende
            cura degli ambienti e dell’accoglienza, contribuendo a creare quell’equilibrio che permette agli ospiti di
            sentirsi davvero a proprio agio.
          </p>
        </div>

        <div className="chi-media">
          <img
            src="/vinoMano.avif"
            alt="Persona che tiene in mano un bicchiere di vino"
            className="chi-img"
          />
        </div>
      </section>

      {/* BLOCCO 3 */}
      <section className="chi-blocco">
        <div className="chi-testo">
          <p className="p-storia">
            Tutto ciò che arriva in tavola è preparato interamente da noi. La pasta fresca viene lavorata a mano ogni
            giorno, con la stessa dedizione di sempre: è il cuore della nostra cucina.
          </p>

          <p className="p-storia">
            Tra i piatti che meglio raccontano il nostro modo di lavorare c’è il nostro <strong>“Ramen Piemontese”</strong>,
            nato dall’incontro tra studio, tecnica e territorio. Un piatto che unisce suggestioni lontane con ingredienti e
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
            Non smettiamo mai di formarci e di cercare nuovi stimoli. L’eleganza si costruisce con lo studio, con
            l’attenzione e con la volontà di migliorarsi ogni giorno.
          </p>

          <p className="p-storia">
            Tradizione e innovazione convivono, ma ciò che non cambia è il nostro modo di stare insieme: come una vera
            famiglia, dentro e fuori dalla cucina.
          </p>

          <p className="p-storia">
            Il nostro desiderio è semplice: portare in tavola la verità della nostra terra, con cura, passione e rispetto.
          </p>
        </div>

        <div className="chi-media">
          <img src="/crudaBella.png" alt="Dettaglio di un piatto" className="chi-img" />
        </div>
      </section>

      {/* GALLERY FINALE */}
      <section id="immagini" className="chi-gallery">
        <div>
          <img src="/finanziera.jpg" alt="Finanziera" className="finanziera-foto" />
        </div>
        <div>
          <img src="/ramen.jpg" alt="Ramen piemontese" className="ramen-foto" />
        </div>
        <div>
          <img src="/vitelloTonnato.jpg" alt="Vitello tonnato" className="vitello-foto" />
        </div>
      </section>
    </>
  );
}

export default ChiSiamo;