"use client";
import "./Contatti.css";

export default function ContactsClient() {
    return (
        <div className="page-wrapper">
        <section className="wrapper">
          <h1 data-aos="fade-down">Contatti</h1>

          <div className="contacts-grid">
            <div className="contacts-card" data-aos="fade-up" data-aos-delay="0">
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

            <div className="contacts-card" data-aos="fade-up" data-aos-delay="100">
              <h3>Contatti</h3>
              <p><a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.location.href= 'mailto:' + 'info' + '@' + 'ristorantedavittorio' + '.it';
            }}
            >
              info@ristorantedavittorio.it
            </a></p>
              <p>
                <a href="tel:+393511159457">+39 351 1159457</a>
                <br />
                <a href="tel:+39017476239">+39 0174 76239</a>
              </p>
            </div>

            <div className="contacts-card" data-aos="fade-up" data-aos-delay="200">
              <h3>Orari</h3>
              <p>Lunedì - Martedì Chiuso</p>
              <p>Mer-Sab 12.30-14.00 | 19.30-21.30</p>
              <p>Domenica 12.30-14.00 | 19.30-21.30</p>
            </div>
          </div>

          <div className="contacts-cta" data-aos="fade-up" data-aos-delay="300">
            <h2>Prenota il tuo tavolo</h2>
            <p>
              Saremo felici di accoglierti e farti vivere un momento di cucina
              autentica. Chiamaci per disponibilità e informazioni.
            </p>

            <a href="tel:+393511159457" className="cta-button">
              Chiama ora
            </a>
          </div>
        </section>
      </div>
    )
}