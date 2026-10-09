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
            name: "Vitello Tonnato",
            price: 17,
            description: "Magatello di vitello cotto a bassa temperatura servito con salsa tonnata",
            allergens: [2, 10],
            type: "antipasto",
            menu: "icone",
            signatureMenu: true,
            vegetarian: false
        },
        {
            id: 2,
            name: "Tajarin con Funghi Porcini e prezzemolo",
            price: 25,
            description: "Mantecati con il burro di Beppino Occelli",
            allergens: [1, 3, 10],
            type: "primo",
            menu: "icone",
            signatureMenu: true,
            vegetarian: true
        },
        {
            id: 3,
            name: "Tajarin con Tartufo Nero locale",
            price: 23,
            description: "Mantecati con il burro di Beppino Occelli",
            allergens: [1, 3, 10],
            type: "primo",
            menu: "icone",
            signatureMenu: true,
            vegetarian: true
        },
        {
            id: 4,
            name: "Filetto di Vitello",
            price: 30,
            description: "Servito con riduzione di frutti di bosco e terminato con cristalli di sale grosso (Nero di Cipro)",
            allergens: [1, 3, 4, 8, 11, 12],
            type: "secondo",
            menu: "icone",
            signatureMenu: true,
            vegetarian: false
        },
        {
            id: 5,
            name: "Frittura di Funghi Porcini",
            price: 27,
            description: "Riposti “a catasta” per mantenerne il calore",
            allergens: [1, 4, 10, 11],
            type: "secondo",
            menu: "icone",
            signatureMenu: true,
            vegetarian: false
        },
        {
            id: 6,
            name: "Zabaione al Marsala",
            price: 8,
            description: "Accompagnato dai biscotti di Battifollo (Foglie di mais)",
            allergens: [1, 3, 8, 10],
            type: "dolce",
            menu: "icone",
            signatureMenu: true,
            vegetarian: true
        },
        {
            id: 7,
            name: "Battuta di Fassone Piemontese",
            price: 19,
            description: "Servita con salsa aioli, senape di Alta Langa e nocciole tostate (Tonda Gentile)",
            allergens: [4, 8, 10, 14],
            type: "antipasto",
            menu: "oltre il bosco",
            signatureMenu: false,
            vegetarian: false
        },
        {
            id: 8,
            name: "“Fiume e Langa”",
            price: 20,
            description: "Insalata di shiso e amaranto verdi e rosse, filetto di trota salmonata affumicato con le sue perle (uova), Robiola d’Alba e salsa Teriyaki",
            allergens: [2, 3, 11],
            type: "antipasto",
            menu: "oltre il bosco",
            signatureMenu: false,
            vegetarian: false
        },
        {
            id: 9,
            name: "“Golden Egg”",
            price: 19,
            description: "Uovo 62°, vellutata leggera di topinambur, funghi shiitake trifolati e tuorlo marinato grattugiato",
            allergens: [3, 10],
            type: "antipasto",
            menu: "oltre il bosco",
            signatureMenu: false,
            vegetarian: true
        },
        {
            id: 10,
            name: "Tortelli al Coniglio tonnato",
            price: 21,
            description: "Ripieni con coniglio marinato 10 giorni sott’olio Taggiasco ed erbe aromatiche, ultimati al tavolo con l’estrazione del suo fondo bruno",
            allergens: [1, 3, 4, 8, 10, 11, 12],
            type: "primo",
            menu: "oltre il bosco",
            signatureMenu: false,
            vegetarian: false
        },
        {
            id: 11,
            name: "Quaglia, Vermouth e Pak Choi",
            price: 26,
            description: "Quaglia disossata, in doppia cottura (prima a bassa temperatura, poi scottata in padella) servita con riduzione al Vermouth di Torino “Vecchia Scuola” e Pak Choi di Perlo stufati",
            allergens: [1, 3, 12, 14],
            type: "secondo",
            menu: "oltre il bosco",
            signatureMenu: false,
            vegetarian: false
        },
        {
            id: 12,
            name: "Semisfera Golosa",
            price: 8,
            description: "Cupola di cioccolato fondente ripiena di semifreddo al caramello salato su cialda di Pavlova sbriciolata",
            allergens: [3, 8],
            type: "dolce",
            menu: "oltre il bosco",
            signatureMenu: false,
            vegetarian: true
        },
        {
            id: 13,
            name: "Lumache al Verde",
            price: 21,
            description: "Tipologia Helix Aspersa già sgusciate, preparate con burro, prezzemolo, aglio e un leggero tocco piccante",
            allergens: [3],
            type: "antipasto",
            menu: "memories",
            signatureMenu: false,
            vegetarian: false
        },
        {
            id: 14,
            name: "Trippa in Umido",
            price: 17,
            description: "Preparata con poco pomodoro e i fagioli bianchi di Bagnasco",
            allergens: [12],
            type: "antipasto",
            menu: "memories",
            signatureMenu: false,
            vegetarian: false
        },
        {
            id: 15,
            name: "Primo, Quinto e Quarto",
            price: 19,
            description: "Tajarin al ragù di fegatini di vitello mantecati con il burro di Beppino Occelli",
            allergens: [1, 3, 10, 12, 14],
            type: "primo",
            menu: "memories",
            signatureMenu: false,
            vegetarian: false
        },
        {
            id: 16,
            name: "Finanziera “alla Vittorio”",
            price: 25,
            description: "Composizione: creste di gallo, animelle di vitello, filoni del midollo spinale del vitello, granelle del toro, petto di pollo e spezzatino di filetto di vitello, funghi porcini e orientali sott’olio e aceto; sfumata con Marsala e fondo bruno e ultimata con cervello del vitello fritto",
            allergens: [1, 3, 4, 8, 11, 12],
            type: "secondo",
            menu: "memories",
            signatureMenu: false,
            vegetarian: false
        },
        {
            id: 17,
            name: "Il nostro Tiramisù",
            price: 8,
            description: "Classico, cremoso, intramontabile",
            allergens: [1, 3, 8, 10, 11],
            type: "dolce",
            menu: "memories",
            signatureMenu: false,
            vegetarian: true
        },
        {
            id: 18,
            name: "Sformato di erbette spontanee di Perlo",
            price: 17,
            description: "Su crema di patate e cipolle, concluso con leggera vellutata di acciughe",
            allergens: [2, 3, 10],
            type: "antipasto",
            menu: "custodi della terra",
            signatureMenu: false,
            vegetarian: false
        },
        {
            id: 19,
            name: "Il nostro “Ramen Piemontese”",
            price: 17,
            description: "Consommé di funghi orientali di Sale delle Langhe e ortaggi di Perlo servito caldo, con al suo interno ingredienti selezionati dai produttori locali e preparati in vari metodi per conferire gusto e leggerezza",
            allergens: [1, 3, 8, 10],
            type: "antipasto",
            menu: "custodi della terra",
            signatureMenu: false,
            vegetarian: true
        },
        {
            id: 20,
            name: "Gnocchi di patate e zucca",
            price: 19,
            description: "Fonduta al “Castelchabra” (formaggio caprino d’alpeggio) di Castelnuovo di Ceva, menta e polvere di amaretti",
            allergens: [1, 3, 8, 10],
            type: "primo",
            menu: "custodi della terra",
            signatureMenu: false,
            vegetarian: true
        },
        {
            id: 21,
            name: "Filiera corta: formaggi nostrani e abbinamenti inediti",
            price: 25,
            description: "Selezione di formaggi nata dal rapporto diretto con i produttori caseari della zona, accompagnata con eccellenze locali (miele, tisane, composte) di Nucetto e Bagnasco",
            allergens: [1, 3, 11, 14],
            type: "secondo",
            menu: "custodi della terra",
            signatureMenu: false,
            vegetarian: true
        },
        {
            id: 22,
            name: "Panna cotta “botanica”",
            price: 8,
            description: "Al profumo di camomilla, liquirizia e malva: gel di tisana biologica studiata per noi da un laboratorio artigianale di Nucetto (Scaolab)",
            allergens: [3],
            type: "dolce",
            menu: "custodi della terra",
            signatureMenu: false,
            vegetarian: true
        }
    ]
