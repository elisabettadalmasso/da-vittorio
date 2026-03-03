import "./Chisiamo.css";

function ChiSiamo() {
  return (
    <>
      {/* BLOCCO 1 */}
      <section className="chi-blocco">
        <div className="chi-testo">
          <h2 className="titolo-storia">La Nostra Storia</h2>

          <p className="p-storia">
            Il nostro ristorante è una famiglia che ha scelto di trasformare la passione in mestiere, e il mestiere in
            accoglienza.
          </p>

          <p className="p-storia">
            In cucina c’è papà Gianni. La cucina è sempre stata parte della sua vita. È cresciuto con i profumi della Val
            Tanaro e con ricette tramandate a voce, fatte di gesti precisi e rispetto profondo per la materia prima. La
            tradizione per lui è una base solida su cui costruire, cercando ogni giorno eleganza nei sapori e armonia nei
            piatti.
          </p>
        </div>

        <div className="chi-media">
          <img
            src="/crudaBella.png"
            alt="Immagine di carne cruda con tartufo e uovo"
            className="chi-img"
          />
        </div>
      </section>

      {/* BLOCCO 2 (reverse) */}
      <section className="chi-blocco reverse">
        <div className="chi-testo">
          <p className="p-storia">
            In sala c’è mamma Marcella, anima fondamentale del ristorante. Presenza attenta e sicura, osserva, ascolta,
            accoglie. È sempre pronta a ricevere ogni cliente con un sorriso autentico. Sa quando raccontare e quando
            lasciare che sia il piatto a parlare. È lei a dare equilibrio, a far sentire ogni ospite parte della casa.
          </p>

          <p className="p-storia">
            Accanto a loro c’è Lorenzo, cresciuto tra tavoli apparecchiati e profumo di pasta fresca. Vive il servizio con
            energia e passione, e la sua presenza in sala è parte integrante dell’esperienza. La sua conoscenza dei vini è
            fondamentale per un ottimo pasto: sa consigliare l’abbinamento migliore, valorizzando ogni piatto con il calice
            giusto. Quando racconta una portata, non si limita a descriverla: riesce a far immaginare i profumi, le
            consistenze, le sfumature di gusto ancora prima del primo assaggio. È un modo di servire che unisce competenza
            ed entusiasmo.
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
            giorno, con la stessa dedizione di sempre. È il cuore della nostra cucina.
          </p>

          <p className="p-storia">
            Tra le nostre specialità ci sono i ravioli al tovagliolo: serviti senza condimento, avvolti in un tovagliolo
            caldo, per lasciare che siano la sfoglia e il ripieno a esprimersi pienamente. Un gesto semplice, ma sicuro. Un
            segno di fiducia nella qualità.
          </p>

          <p className="p-storia">
            Il nostro piatto simbolo sono i tajarin al tartufo. Sottilissimi, dorati, fatti a mano, esaltati da pochi
            elementi essenziali che permettono al profumo del tartufo di essere protagonista. È un piatto che unisce
            raffinatezza e territorio.
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
        </div>

        <div className="chi-media">
          {/* per ora riuso una foto: poi potrai sostituirla con una più adatta */}
          <img
            src="/crudatartufo.png"
            alt="Dettaglio di un piatto"
            className="chi-img"
          />
        </div>
      </section>

      {/* GALLERY FINALE */}
      <section id="immagini" className="chi-gallery">
        <div>
          <img src="finanziera.jpg" alt="Finanziera" className="finanziera-foto" />
        </div>
        <div>
          <img src="ramen.jpg" alt="Ramen piemontese" className="ramen-foto" />
        </div>
        <div>
          <img src="vitelloTonnato.jpg" alt="Vitello tonnato" className="vitello-foto" />
        </div>
      </section>
    </>
  );
}

export default ChiSiamo;