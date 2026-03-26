export interface Specialty {
    id: number
    name : string
    description : string
    photo : string
    fallback : string
    alt : string
}

export const specialties: Specialty[] = [
    {
        id: 1,
        name: 'Il Nostro "Ramen" Piemontese',
        description: "Consommé di Funghi Orientali servito caldo, contenente ingredienti selezionati da noi per dare gusto e una buona leggerezza al palato.",
        photo: "/gallery/piatti/ramen.avif",
        fallback: "/gallery/piatti/ramen.jpg",
        alt: "Ramen piemontese con funghi orientali"
    },
    {
        id: 2,
        name: "Tajarin al Tartufo Nero",
        description: "Fatti a mano ogni giorno, sottili e dorati, esaltati dal burro di Beppino Occelli e dal profumo profondo del tartufo nero. Un piatto che racconta il territorio con eleganza.",
        photo: "/gallery/piatti/tagliolinitartufo.avif",
        fallback: "/gallery/piatti/tagliolinitartufo.jpg",
        alt: "tagliolini freschi"
    },
    {
        id: 3,
        name: 'Finanziera "Alla Vittorio"',
        description: "Preparata secondo la tradizione della nostra vallata, con carni selezionate e profumi intensi, sfumata al Marsala e completata con cervello fritto.",
        photo: "/gallery/piatti/finanziera.avif",
        fallback: "/gallery/piatti/finanziera.jpg",
        alt: "finanziera della tradizione"
    }
]