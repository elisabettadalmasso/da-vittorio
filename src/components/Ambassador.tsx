import { partner } from "@/components/data/partner";
import Picture from "@/components/Picture";
import './Ambassador.css';

export default function Ambassador() {
    return (
         <section className="ambassador">
          <div className="container">
            <h2>I Nostri Partner</h2>
            <div className="sep"></div>
            <div className="ambassador-grid">
              {partner.map((p, index) => (
                <div
                  className="ambassador-card"
                  key={p.id}
                  data-aos="flip-left"
                  data-aos-delay={index * 100}
                >
                  <Picture
                    photo={p.fotoPersona}
                    fallback={p.fallbackPersona}
                    alt={p.altPersona}
                  />
                  <Picture
                    photo={p.logo}
                    fallback={p.fallbackLogo}
                    alt={p.altLogo}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
    )
}