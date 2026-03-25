interface Partner {
    id : number
    nome : string
    fotoPersona : string
    fallbackPersona : string
    altPersona : string
    logo : string
    fallbackLogo : string
    altLogo : string
}

export const partner: Partner[] = [
    {
        id: 1,
        nome: "Vecchia Scuola",
        fotoPersona: "/gallery/famiglia/LorenzoGianni.avif",
        fallbackPersona: "/gallery/famiglia/LorenzoGianni.jpeg",
        altPersona: "Lorenzo con Vecchia Scuola Vermouth",
        logo: "/gallery/partner/vermounthLogo.avif",
        fallbackLogo: "/gallery/partner/vermounthLogo.jpeg",
        altLogo: "Logo Vecchia Scuola"
    },
    {
        id: 2,
        nome: "Champagne Mailly",
        fotoPersona: "/gallery/famiglia/LorenzoChampagne.avif",
        fallbackPersona: "/gallery/famiglia/LorenzoChampagne.jpeg",
        altPersona: "Lorenzo con Champagne Mailly",
        logo: "/gallery/partner/champagneLogo.avif",
        fallbackLogo: "/gallery/partner/champagneLogo.jpg",
        altLogo: "Logo Champagne Mailly"
    },
    {
        id: 3,
        nome: "Bordiga",
        fotoPersona: "/gallery/famiglia/lorenzoBordiga.avif",
        fallbackPersona: "/gallery/famiglia/lorenzoBordiga.jpeg",
        altPersona: "Lorenzo con Bordiga",
        logo: "/gallery/partner/bordigaLogo.avif",
        fallbackLogo: "/gallery/partner/bordigaLogo.jpeg",
        altLogo: "Logo Bordiga"
    }
]