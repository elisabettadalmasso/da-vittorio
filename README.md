# 🍽️ Ristorante Da Vittorio - Website

Sito web ufficiale del Ristorante Da Vittorio, ristorante a conduzione familiare situato a Nucetto (CN), specializzato in cucina piemontese autentica.

🔗 **Live Site:** [https://da-vittorio.vercel.app/](https://da-vittorio.vercel.app/)

---

## 📋 Descrizione

Sito web moderno e responsive che presenta il ristorante, il menu, la storia della famiglia e permette ai clienti di prenotare facilmente.

### ✨ Features Principali

- 🎨 Design elegante e responsive
- 📱 Ottimizzato per mobile, tablet e desktop
- 🔍 SEO ottimizzato con metadata personalizzati
- ✨ Animazioni fluide (AOS)
- 🍝 Menu interattivo con filtri (Tutti, Vegetariano, Per Tipo, Per Menù)
- 📸 Galleria fotografica
- 📞 Sistema di prenotazione veloce
- ⚡ Performance ottimizzate con Next.js

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules + CSS Variables
- **Animations:** [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- **Deployment:** [Vercel](https://vercel.com/)
- **Image Optimization:** Next.js Image + AVIF/WebP fallbacks

---

## 📂 Struttura del Progetto
```
davittorio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Homepage
│   │   ├── chisiamo/          # Chi Siamo page
│   │   ├── menu/              # Menu page (con filtri)
│   │   ├── contatti/          # Contatti page
│   │   ├── privacy/           # Privacy Policy page
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # CSS globale + variabili
│   └── components/
│       ├── data/              # TypeScript data files
│       │   ├── specialties.ts
│       │   ├── awards.ts
│       │   ├── dish.ts
│       │   ├── menuDegustazione.ts
│       │   ├── gallery.ts
│       │   └── partner.ts
│       ├── AOSInit.tsx        # AOS initialization
│       ├── Navbar.tsx         # Navigation component
│       ├── Footer.tsx         # Footer component
│       └── Picture.tsx        # Image component with fallback
└── public/
    └── gallery/               # Immagini ottimizzate
```

---

## 🚀 Getting Started

### Prerequisiti

- Node.js 18+ 
- npm o yarn

### Installazione
```bash
# Clone repository
git clone [your-repo-url]
cd davittorio

# Installa dipendenze
npm install

# Avvia development server
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

### Build per Produzione
```bash
npm run build
npm start
```

---

## 🌐 Deploy

Il sito è automaticamente deployato su Vercel dal branch `main`.

Ogni push su `main` triggera un nuovo deploy in produzione.

---

## 📄 Pagine

- **/** - Homepage con storia, specialità, premi e CTA
- **/chisiamo** - Storia della famiglia e filosofia del ristorante
- **/menu** - Menu completo con filtri interattivi
- **/contatti** - Informazioni di contatto e prenotazioni
- **/privacy** - Privacy Policy (GDPR compliant)

---

## 🎨 Caratteristiche Design

- Palette colori elegante ispirata alla tradizione piemontese
- Tipografia: Cormorant Garamond (heading) + Raleway (body)
- Layout responsive con breakpoint mobile-first
- Animazioni smooth on scroll
- Ottimizzazione immagini con formato AVIF + fallback

---

## 👥 Crediti

**Sviluppato da:** [Il tuo nome]  
**Cliente:** Ristorante Da Vittorio, Nucetto (CN)  
**Anno:** 2026

---

## 📝 License

Tutti i diritti riservati © 2026 Ristorante Da Vittorio
