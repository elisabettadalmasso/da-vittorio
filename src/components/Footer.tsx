"use client";
import "./Footer.css";
import Link from "next/link";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <p className="footer-label">Dove siamo</p>
          <p>Via Nazionale 5</p>
          <p>12070 Nucetto (CN), Italia</p>
        </div>

        <div>
          <p className="footer-label">Contatti</p>
          <p>
            <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.location.href= 'mailto:' + 'info' + '@' + 'ristorantedavittorio' + '.it';
            }}
            >
              info@ristorantedavittorio.it
            </a>
          </p>
          <p>
            <a href="tel:+39017476239">+39 0174 76239</a>
          </p>
          <p>
            <a href="tel:+393511159457">+39 351 1159457</a>
          </p>
        </div>

        <div>
          <p className="footer-label">Orari</p>
          <p>Lunedì - Martedì Chiuso</p>
          <p>Mer-Sab 12.30-14.00 | 19.30-21.30</p>
          <p>Domenica 12.30-14.00 | 19.30-21.30</p>
        </div>

        <div className="footer-social">
          <p className="footer-label">Seguici</p>
          <div className="social-icon">
            <a
              className="social-link"
              aria-label="Seguici su Instagram"
              href="https://www.instagram.com/da_vittorio_ristorante/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              className="social-link"
              aria-label="Seguici su Facebook"
              href="https://www.facebook.com/davittorionucetto/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              className="social-link"
              aria-label="Recensiscici su Tripadvisor"
              href="https://www.tripadvisor.it/Restaurant_Review-g2507191-d23430783-Reviews-Ristorante_Da_Vittorio-Nucetto_Province_of_Cuneo_Piedmont.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 1.04 7.999 5.993 5.993 0 0 0 8.004-.492L12 17.335l.993-1.045a5.993 5.993 0 0 0 8.004.492 5.998 5.998 0 0 0 1.04-7.999L24 6.648h-4.36c-2.308-1.57-4.977-2.353-7.634-2.353zM12 6.006a9.373 9.373 0 0 1 4.346 1.078 5.985 5.985 0 0 0-4.346 1.87 5.985 5.985 0 0 0-4.346-1.87A9.373 9.373 0 0 1 12 6.006zM6 9.994a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm12 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM6 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Ristorante Da Vittorio &middot;{" "}
        <Link href="privacy">Privacy Policy</Link> &middot; P.IVA 03523420044 &middot; Sito realizzato da
        Elisabetta Dalmasso
      </div>
    </footer>
  );
}

export default Footer;
