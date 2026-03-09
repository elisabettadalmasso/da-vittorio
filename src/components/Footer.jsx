import "./Footer.css"
import { Link } from "react-router-dom"
import { FaInstagram, FaFacebook, FaTripadvisor } from "react-icons/fa"

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

        <div className="footer-social">
          <h4>Seguici</h4>
          <div className="social-icon">

          <a className="social-link" href="https://www.instagram.com/da_vittorio_ristorante/" target="_blank" rel="noopener noreferrer">
          <FaInstagram/>
          </a>
          <a className="social-link" href="https://www.facebook.com/davittorionucetto/" target="_blank" rel="noopener noreferrer">
          <FaFacebook/>
          </a>
          <a className="social-link" href="https://www.tripadvisor.it/Restaurant_Review-g2507191-d23430783-Reviews-Ristorante_Da_Vittorio-Nucetto_Province_of_Cuneo_Piedmont.html" target="_blank" rel="noopener noreferrer">
          <FaTripadvisor/>
          </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Ristorante Da Vittorio &middot; <Link to="privacy">Privacy Policy</Link> &middot; Sito realizzato da Elisabetta Dalmasso
      </div>
    </footer>
  )
}

export default Footer 