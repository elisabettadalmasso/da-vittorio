interface TartufoBianco {
    active : boolean
    title : string
    description : string
    pairings : { label : string, price : number }[]
    tastingMenu : {
        name : string
        courses : number
        priceNoDrinks : number
        priceWithWine : number
        wineCount : number
    }
    note : string
}

// Metti active a false per nascondere la sezione fuori stagione
export const tartufoBianco: TartufoBianco = {
    active: true,
    title: "Il Tartufo Bianco",
    description: "Il fascino e l’aroma del tartufo bianco selezionato per accompagnare la vostra esperienza di gusto.",
    pairings: [
        { label: "Antipasti", price: 40 },
        { label: "Primi", price: 50 },
        { label: "Secondi", price: 65 },
        { label: "Dolci", price: 35 },
    ],
    tastingMenu: {
        name: "Trifola",
        courses: 4,
        priceNoDrinks: 150,
        priceWithWine: 200,
        wineCount: 3,
    },
    note: "Ogni portata è comprensiva di 10g. Per guidarvi nella scelta del miglior abbinamento, il personale di sala è a vostra completa disposizione.",
}
