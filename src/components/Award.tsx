import Link from "next/link";   
import './Award.css';
import { awards, Award } from "@/components/data/awards";
import Picture from "@/components/Picture";

export default function Awards() {
    return (
        <section className="awards">
            <div className="container">
          <h2>Riconoscimenti</h2>
          <div className="sep"></div>
          <div className="awards-grid">
            {awards.map((award: Award, index: number) => (
              <div
                className="award-card"
                key={award.id}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <Picture
                  photo={award.photo}
                  fallback={award.fallback}
                  alt={award.alt}
                />
                <h3>{award.name}</h3>
                <p>{award.description}</p>
              </div>
            ))}
          </div>
          </div>
        </section>
    )
}