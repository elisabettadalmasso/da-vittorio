import "./Contatti.css"

export default function Contatti() {
  return (
    <>
    <section className="wrapper">
      <h1>Contatti</h1>

      <div className="contacts-grid">
        <div className="contacts-card">
          <h3>Dove siamo</h3>
          <p>
            <a
              href="https://maps.app.goo.gl/XbwU174KbjS8jfNWA"
              target="_blank"
              rel="noopener noreferrer"
            >
              Via Nazionale 5 <br />
              12070 Nucetto (CN), Italia
            </a>
          </p>
        </div>

        <div className="contacts-card">
          <h3>Contatti</h3>
          <p>
            <a href="tel:+393511159457">+39 351 1159457</a>
            <br />
            <a href="tel:+39017476239">+39 0174 76239</a>
          </p>
        </div>

        <div className="contacts-card">
          <h3>Orari</h3>
          <p>Lunedì - Martedì Chiuso</p>
          <p>Mer-Sab 12.30-14.00 | 19.30-21.30</p>
          <p>Domenica 12.30-14.00 | 19.30-21.30</p>
        </div>
      </div>

      <div className="contacts-cta">
        <h2>Prenota il tuo tavolo</h2>
        <p>
          Saremo felici di accoglierti e farti vivere un momento di cucina autentica.
          Chiamaci per disponibilità e informazioni.
        </p>

        <a href="tel:+393511159457" className="cta-button">
          Chiama ora
        </a>
      </div>
    </section>
    </>
  )
}