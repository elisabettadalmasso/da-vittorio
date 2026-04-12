import Link from 'next/link'
import { specialties, Specialty } from '@/components/data/specialties'
import './Specialties.css'
import Picture from '@/components/Picture'

export default function Specialties() {
  return (
    <section className="specialties">
      <div className="container specialties-inner">
        <h2>Le nostre specialità</h2>
        <div className="sep"></div>
        <div className="specialties-grid">
          {specialties.map((specialty: Specialty, index: number) => (
            <Link href="/menu" className="specialties-card" key={specialty.id} data-aos="fade-left" data-aos-delay={index * 100}>
              <Picture photo={specialty.photo} fallback={specialty.fallback} alt={specialty.alt} />
              <h3>{specialty.name}</h3>
              <p>{specialty.description}</p>
            </Link>
          ))}
          <Link href="/menu" className="link-menu">
            Scopri il nostro menu →
          </Link>
        </div>
      </div>
    </section>
  )
}
