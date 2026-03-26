export interface Award {
    id : number
    name : string
    description : string
    photo : string
    fallback : string
    alt : string
}

export const awards: Award [] = [
        {
            id: 1,
            name: 'Premio "Cellar Door" 2026',
            description: "Miglior Carta Vini d'Italia 2026",
            photo: "/gallery/awards/cellarDoor.avif",
            fallback: "/gallery/awards/cellarDoor.jpeg",
            alt: 'Premio "Cellar Door" 2026'
        },
        {
            id: 2,
            name: "Corona Radiosa 2026",
            description: "Il Golosario Ristoranti di Marco Gatti e Paolo Massobrio",
            photo: "/gallery/awards/coronaRadiosa.avif",
            fallback: "/gallery/awards/coronaRadiosa.jpeg",
            alt: "Corona Radiosa 2026"
        },
        {
            id: 3,
            name: "Miglior tavola dell'anno",
            description: "Miglior tavola dell'anno come categoria 'Trattoria di Lusso' per la Guida Il Golosario di Marco Gatti e Paolo Massobrio",
            photo: "/gallery/awards/ilGolosario.avif",
            fallback: "/gallery/awards/ilGolosario.jpeg",
            alt: "Miglior tavola dell'anno"
        },
        {
            id: 4,
            name: "Travelers' Choice Awards",
            description: "Tripadvisor Travelers' Choice Awards 2025",
            photo: "/gallery/awards/traverlersChioce.avif",
            fallback: "/gallery/awards/traverlersChioce.jpeg",
            alt: "Travelers' Choice Awards"
        },
        {
            id: 5,
            name: "Best of the Best",
            description: "Travelers' Choice Best of the Best Winner 2023",
            photo: "/gallery/awards/bestOfTheBest.avif",
            fallback: "/gallery/awards/bestOfTheBest.jpeg",
            alt: "Best of the Best"
        },
        {
            id: 6,
            name: "Chiocciola Slow Food",
            description: "Chiocciola Guida Osterie d'Italia 2026 Slow Food",
            photo: "/gallery/awards/osterieItalia.avif",
            fallback: "/gallery/awards/osterieItalia.jpeg",
            alt: "Chiocciola Slow Food"
        },
        {
            id: 7,
            name: "Guida 'Fuoricasello'",
            description: "Presenti nella Guida Fuoricasello della Famiglia Longo",
            photo: "/gallery/awards/fuoriCasello.avif",
            fallback: "/gallery/awards/fuoriCasello.jpeg",
            alt: "Guida 'Fuoricasello'"
        },
        {
            id: 8,
            name: "Guida Untold",
            description: "Presenti nella Guida 'Untold' della rivista online 'Decanto', con il premio di 'Cellar Door' come migliore carta vini d'italia per la regione Piemonte",
            photo: "/gallery/awards/untold.avif",
            fallback: "/gallery/awards/untold.jpeg",
            alt: "Guida Untold"
        },
        {
            id: 9,
            name: "Falstaff",
            description: "Presenti nella famosa guida eno-gastronomica tedesca Falstaff",
            photo: "/gallery/awards/falstaff.avif",
            fallback: "/gallery/awards/falstaff.jpeg",
            alt: "Falstaff"
        },
        {
            id: 10,
            name: "I ristoranti della tavolozza 2026",
            description: "Presenti in Guida Ristoranti della Tavolozza 2026",
            photo: "/gallery/awards/tavolozza.avif",
            fallback: "/gallery/awards/tavolozza.jpeg",
            alt: "I ristoranti della tavolozza 2026"
        }
    ]