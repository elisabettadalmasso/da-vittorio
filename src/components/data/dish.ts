export interface Dish {
    id : number
    name : string
    price : number
    description : string
    allergens : number[]
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
            name: "Tajarin al Tartufo Nero",
            price: 19,
            description: "Mantecati con il burro di Beppino Occelli",
            allergens: [1, 3, 10],
            type: "primo",
            menu: "icone",
            signatureMenu: true,
            vegetarian: true
        },
        {
            id: 3,
            name: "Ravioli ripieni di Brasato di Bue e Verdure",
            price: 19,
            description: "Serviti con il loro ristretto di cottura",
            allergens: [1, 3, 4, 8, 11, 12],
            type: "primo",
            menu: "icone",
            signatureMenu: true,
            vegetarian: false
        },
        {
            id: 4,
            name: "Filetto di Vitello in crosta di Pancetta",
            price: 29,
            description: "Sfumato al Cognac VS Courvoisier e contorno di stagione",
            allergens: [1, 3, 4, 8, 11, 12],
            type: "secondo",
            menu: "icone",
            signatureMenu: true,
            vegetarian: false
        },
        {
            id: 5,
            name: "Battuta di Fassona Bovina Piemontese",
            price: 19,
            description: "Servita con Robiola d’Alba, Tonda Gentile e Tartufo Nero",
            allergens: [3, 8],
            type: "antipasto",
            menu: "emozioni locali",
            signatureMenu: false,
            vegetarian: false
        },

        {
            id: 6,
            name: "L’Uovo 3.0",
            price: 19,
            description: "Uovo 62°, vellutata leggera di topinambur, funghi Shiitake trifolati e tartufo nero",
            allergens: [3, 10],
            type: "antipasto",
            menu: "emozioni locali",
            signatureMenu: false,
            vegetarian: true
        },

        {
            id: 7,
            name: "Carciofo, Raschera & Pomodoro",
            price: 18,
            description: "Carciofo ripieno del suo cuore aromatizzato al timo e Raschera DOP su passatina di pomodoro al profumo d’arancia",
            allergens: [3],
            type: "antipasto",
            menu: "emozioni locali",
            signatureMenu: false,
            vegetarian: true
        },

        {
            id: 8,
            name: "Tagliatelle al Ragù di Cotechino",
            price: 18,
            description: "Tagliatelle con farina type 2 semi-integrale coltivata a Pievetta servite con ragù di cotechino artigianale",
            allergens: [1, 3, 4, 8, 10, 11, 12],
            type: "primo",
            menu: "emozioni locali",
            signatureMenu: false,
            vegetarian: false
        },

        {
            id: 9,
            name: "Costoletta di Agnello, Camomilla & Liquirizia",
            price: 25,
            description: "Costoletta di agnello alle erbe aromatiche con riduzione di camomilla e liquirizia",
            allergens: [],
            type: "secondo",
            menu: "emozioni locali",
            signatureMenu: false,
            vegetarian: false
        },

        {
            id: 10,
            name: "Zabaione al Marsala",
            price: 8,
            description: "Con foglie di mais di Battifollo e lingue di gatto artigianali",
            allergens: [1, 3, 8, 10],
            type: "dolce",
            menu: "emozioni locali",
            signatureMenu: false,
            vegetarian: true
        },
        {
            id: 11,
            name: "Lumache al Verde",
            price: 19,
            description: "Già sgusciate, preparate con burro, prezzemolo, aglio e un pizzico di peperoncino finale",
            allergens: [3],
            type: "antipasto",
            menu: "l'essenza delle origini",
            signatureMenu: false,
            vegetarian: false
        },

        {
            id: 12,
            name: "Trippa in Umido",
            price: 16,
            description: "Accompagnata dai fagioli bianchi di Bagnasco",
            allergens: [12],
            type: "antipasto",
            menu: "l'essenza delle origini",
            signatureMenu: false,
            vegetarian: false
        },

        {
            id: 13,
            name: "Tortelli ripieni di Lampredotto e Cece di Nucetto",
            price: 18,
            description: "Serviti con una salsa verde cremosa e delicata",
            allergens: [1, 3, 10],
            type: "primo",
            menu: "l'essenza delle origini",
            signatureMenu: false,
            vegetarian: false
        },

        {
            id: 14,
            name: "Finanziera Alla Vittorio",
            price: 23,
            description: "Preparata secondo la tradizione della vallata con petto di pollo, spezzatino di filetto, creste di gallo, animelle di vitello, filoni di midollo, granelle di toro, funghi sott'olio e aceto, sfumata al Marsala e completata con cervello di vitello fritto",
            allergens: [1, 3, 4, 8, 11, 12],
            type: "secondo",
            menu: "l'essenza delle origini",
            signatureMenu: false,
            vegetarian: false
        },

        {
            id: 15,
            name: "Sfera Magica",
            price: 8,
            description: "Sfera di cioccolato fondente ripiena di crema al caramello salato su cialda di Pavlova, terminata in sala con cioccolato caldo",
            allergens: [3, 8],
            type: "dolce",
            menu: "l'essenza delle origini",
            signatureMenu: false,
            vegetarian: true
        },
        {
            id: 16,
            name: "Capunet di Verza",
            price: 16,
            description: "Ripieno di riso, topinambur, cime di rapa e carote, servito con maionese al basmati e rifinito con scorza di limone",
            allergens: [3, 10],
            type: "antipasto",
            menu: "identità vegetale",
            signatureMenu: false,
            vegetarian: true
        },

        {
            id: 17,
            name: "Il Nostro Ramen Piemontese",
            price: 16,
            description: "Consommé di funghi orientali servito caldo con ingredienti selezionati per dare gusto e leggerezza al palato",
            allergens: [1, 4, 8],
            type: "antipasto",
            menu: "identità vegetale",
            signatureMenu: false,
            vegetarian: true
        },

        {
            id: 18,
            name: "Gnocchi di Patate e Castagne Bianche Garessine",
            price: 18,
            description: "Su crema di zucca profumata alla cannella, porro di Cervere croccante e germogli di wasabi",
            allergens: [1, 3, 10],
            type: "primo",
            menu: "identità vegetale",
            signatureMenu: false,
            vegetarian: true
        },

        {
            id: 19,
            name: "Selezione di Formaggi & Tisane Locali",
            price: 24,
            description: "Formaggi della nostra vallata dal più delicato al più stagionato abbinati a tisane biologiche di Nucetto",
            allergens: [3, 11, 14],
            type: "secondo",
            menu: "identità vegetale",
            signatureMenu: false,
            vegetarian: true
        },

        {
            id: 20,
            name: "Il Nostro Montebianco",
            price: 8,
            description: "Cialda di castagne, crema di marroni, panna montata e marron glacé prodotti a Nucetto",
            allergens: [3, 8],
            type: "dolce",
            menu: "identità vegetale",
            signatureMenu: false,
            vegetarian: true
        }
    ]