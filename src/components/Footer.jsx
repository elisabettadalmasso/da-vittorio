import "./Footer.css"
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div>
          <h4>Dove siamo</h4>
          <p>Via Nazionale 5</p>
          <p>12070 Nucetto (CN), Italia</p>
        </div>

        <div>
          <h4>Contatti</h4>
          <p>+39 0174 76239</p>
        </div>

        <div>
          <h4>Orari</h4>
          <p>Lunedì - Martedì Chiuso</p>
          <p>Mer-Sab 12.30-14.00 | 19.30-21.30</p>
          <p>Domenica 12.30-14.00 | 19.30-21.30</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Ristorante Da Vittorio
      </div>
    </footer>
  )
}

export default Footer 