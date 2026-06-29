export interface Dish {
    id : number
    name : string
    price : number
    description : string
    allergens? : number[]
    type : string
    menu : string
    signatureMenu : boolean
    vegetarian : boolean
}

export const dish: Dish[] = [
        {
            id: 1,
            name: "Vitello Tonnato, Antico & Moderno",
            price: 16,
            description: "Magatello di Vitello cotto a bassa temperatura e servito con salsa tonnata all’antica con aggiunta finale di un pizzico di Maionese",
            allergens: [2, 10],
            type: "antipasto",
            menu: "icone",
            signatureMenu: true,
            vegetarian: false
        },
        {
            id: 2,
            name: "Tajarin al Tartufo Nero estivo",
            price: 22,
            description: "Mantecati con il burro di Beppino Occelli",
            allergens: [1, 3, 10],
            type: "primo",
            menu: "icone",
            signatureMenu: true,
            vegetarian: true
        },
        {
            id: 3,
            name: "Gnocchi di Patate e Grano Saraceno",
            price: 18,
            description: "conditi con ragù di Bue nostrano",
            allergens: [1, 3, 4, 8, 11, 12],
            type: "primo",
            menu: "icone",
            signatureMenu: true,
            vegetarian: false
        },
        {
            id: 4,
            name: "Il nostro Omaggio a Carlo di Luccio",
            price: 30,
            description: "Filetto di Vitello sfumato con il Vermouth di Torino “Vecchia Scuola”",
            allergens: [1, 3, 4, 8, 11, 12],
            type: "secondo",
            menu: "icone",
            signatureMenu: true,
            vegetarian: false
        },
        {
            id: 5,
            name: "Battuta di Fassona Bovina Piemontese",
            price: 20,
            description: "Servita con insalatina di Funghi Porcini e Tartufo Nero",
            type: "antipasto",
            menu: "una passeggiata nel bosco",
            signatureMenu: false,
            vegetarian: false
        },

        {
            id: 6,
            name: "“Sottobosco in Castagno”",
            price: 23,
            description: "Funghi Porcini saltati con Burro e Salvia e successivamente cotti in forno avvolti dalle foglie di Castagno ",
            allergens: [3],
            type: "antipasto",
            menu: "una passeggiata nel bosco",
            signatureMenu: false,
            vegetarian: true
        },

        {
            id: 7,
            name: "“Golden Egg”",
            price: 19,
            description: "Uovo 62°, Vellutata leggera di Cipolle e Patate, Funghi Porcini trifolati e Tuorlo marinato grattuggiato",
            allergens: [3, 10],
            type: "antipasto",
            menu: "una passeggiata nel bosco",
            signatureMenu: false,
            vegetarian: true
        },

        {
            id: 8,
            name: "Tajarin ai Funghi Porcini",
            price: 22,
            description: "Tagliolini conditi con Funghi Porcini e prezzemolo, mantecati con il Burro di Beppino Occelli",
            allergens: [1, 3, 10],
            type: "primo",
            menu: "una passeggiata nel bosco",
            signatureMenu: false,
            vegetarian: true
        },

        {
            id: 9,
            name: "Frittura di Funghi Porcini ",
            price: 26,
            description: "Serviti “a catasta” per mantenerne il calore",
            allergens: [1, 4, 10, 11],
            type: "secondo",
            menu: "una passeggiata nel bosco",
            signatureMenu: false,
            vegetarian: false
        },

        {
            id: 10,
            name: "Cheesecake alle Fragole",
            price: 8,
            description: "Cheesecake con base Biscotto di Battifollo e Fragole di Pievetta",
            allergens: [1, 3, 8],
            type: "dolce",
            menu: "una passeggiata nel bosco",
            signatureMenu: false,
            vegetarian: true
        },
        {
            id: 11,
            name: "Lumache al Verde",
            price: 21,
            description: "tipologia Helix Aspersa, già sgusciate, preparate con Burro, Prezzemolo, Aglio con un leggero tono piccante",
            allergens: [3],
            type: "antipasto",
            menu: "origini",
            signatureMenu: false,
            vegetarian: false
        },

        {
            id: 12,
            name: "Trippa in Umido",
            price: 16,
            description: "Accompagnata con Fagioli Bianchi di Bagnasco",
            allergens: [12],
            type: "antipasto",
            menu: "origini",
            signatureMenu: false,
            vegetarian: false
        },

        {
            id: 13,
            name: "Tortelli del Presidio",
            price: 18,
            description: "Tortelli ripieni di Lampredotto e Cece di Nucetto, mantecati con Burro e Timo",
            allergens: [1, 3, 10],
            type: "primo",
            menu: "origini",
            signatureMenu: false,
            vegetarian: false
        },

        {
            id: 14,
            name: "Finanziera Alla Vittorio",
            price: 24,
            description: "Quella preparata nella nostra vallata in tradizione. Composta da Creste del gallo, Animelle di vitello, Filoni del midollo, Granelle del toro, Petto di pollo, Spezzatino di filetto, Funghi sott’olio e aceto. Sfumata con il Marsala e accompagnata dal Cervello del vitello fritto ",
            allergens: [1, 3, 4, 8, 11, 12],
            type: "secondo",
            menu: "origini",
            signatureMenu: false,
            vegetarian: false
        },

        {
            id: 15,
            name: "Semisfera Golosa",
            price: 8,
            description: "Cupola di Cioccolato fondente ripiena con crema al Caramello salato su cialda di Pavlova sbriciolata ",
            allergens: [3, 8],
            type: "dolce",
            menu: "origini",
            signatureMenu: false,
            vegetarian: true
        },
        {
            id: 16,
            name: "“Orto Fusion”",
            price: 19,
            description: "Roll di Lattuga Romana ripiena di Basmati e Shiitake trifolati, Crema di Funghi Orientali e giardino di verdure degli orti circostanti",
            allergens: [3, 11, 12],
            type: "antipasto",
            menu: "impronte vegetali",
            signatureMenu: false,
            vegetarian: true
        },

        {
            id: 17,
            name: "Sformato di Erbette di campo spontanee",
            price: 17,
            description: "Crema al Cavolo viola, Fonduta al Raschera Dop, sfoglie croccanti di cavolo fritto e Brunoise di Tonda Gentile",
            allergens: [3, 8, 10],
            type: "antipasto",
            menu: "impronte vegetali",
            signatureMenu: false,
            vegetarian: true
        },

        {
            id: 18,
            name: "Tajarin al profumo estivo",
            price: 18,
            description: "Tagliolini conditi con Burro, Zucchine, Limone e Menta, rifiniti con scorza di Limone",
            allergens: [1, 3, 10],
            type: "primo",
            menu: "impronte vegetali",
            signatureMenu: false,
            vegetarian: true
        },

        {
            id: 19,
            name: "Formaggi & Tisane",
            price: 25,
            description: "Selezione di Formaggi di Aziende della Vallata. Abbinati, dal più delicato al più stagionato, a diverse tipologie di Tisane biologiche prodotte a Nucetto",
            allergens: [3, 11, 14],
            type: "secondo",
            menu: "impronte vegetali",
            signatureMenu: false,
            vegetarian: true
        },

        {
            id: 20,
            name: "Zabaione al Marsala",
            price: 8,
            description: "accompagnato dai Biscotti di Battifollo (Foglie di Mais)",
            allergens: [1, 3, 8, 10],
            type: "dolce",
            menu: "impronte vegetali",
            signatureMenu: false,
            vegetarian: true
        }
    ]