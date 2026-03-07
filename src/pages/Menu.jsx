import { useState } from "react"
import "./Menu.css"

function Menu() {

    const piatti = [
        {
            id: 1,
            nome: "Vitello Tonnato, Antico & Moderno",
            prezzo: 16,
            descrizione: "Magatello di Vitello cotto a bassa temperatura e servito con salsa tonnata all’antica con aggiunta finale di un pizzico di Maionese",
            allergeni: [2, 10],
            tipo: "antipasto",
            menu: "icone",
            icona: true,
            vegetariano: false
        },
        {
            id: 2,
            nome: "Tajarin al Tartufo Nero",
            prezzo: 19,
            descrizione: "Mantecati con il burro di Beppino Occelli",
            allergeni: [1, 3, 10],
            tipo: "primo",
            menu: "icone",
            icona: true,
            vegetariano: true
        },
        {
            id: 3,
            nome: "Ravioli ripieni di Brasato di Bue e Verdure",
            prezzo: 19,
            descrizione: "Serviti con il loro ristretto di cottura",
            allergeni: [1, 3, 4, 8, 11, 12],
            tipo: "primo",
            menu: "icone",
            icona: true,
            vegetariano: false
        },
        {
            id: 4,
            nome: "Filetto di Vitello in crosta di Pancetta",
            prezzo: 29,
            descrizione: "Sfumato al Cognac VS Courvoisier e contorno di stagione",
            allergeni: [1, 3, 4, 8, 11, 12],
            tipo: "secondo",
            menu: "icone",
            icona: true,
            vegetariano: false
        },
        {
            id: 5,
            nome: "Battuta di Fassona Bovina Piemontese",
            prezzo: 19,
            descrizione: "Servita con Robiola d’Alba, Tonda Gentile e Tartufo Nero",
            allergeni: [3, 8],
            tipo: "antipasto",
            menu: "emozioni locali",
            icona: false,
            vegetariano: false
        },

        {
            id: 6,
            nome: "L’Uovo 3.0",
            prezzo: 19,
            descrizione: "Uovo 62°, vellutata leggera di topinambur, funghi Shiitake trifolati e tartufo nero",
            allergeni: [3, 10],
            tipo: "antipasto",
            menu: "emozioni locali",
            icona: false,
            vegetariano: true
        },

        {
            id: 7,
            nome: "Carciofo, Raschera & Pomodoro",
            prezzo: 18,
            descrizione: "Carciofo ripieno del suo cuore aromatizzato al timo e Raschera DOP su passatina di pomodoro al profumo d’arancia",
            allergeni: [3],
            tipo: "antipasto",
            menu: "emozioni locali",
            icona: false,
            vegetariano: true
        },

        {
            id: 8,
            nome: "Tagliatelle al Ragù di Cotechino",
            prezzo: 18,
            descrizione: "Tagliatelle con farina tipo 2 semi-integrale coltivata a Pievetta servite con ragù di cotechino artigianale",
            allergeni: [1, 3, 4, 8, 10, 11, 12],
            tipo: "primo",
            menu: "emozioni locali",
            icona: false,
            vegetariano: false
        },

        {
            id: 9,
            nome: "Costoletta di Agnello, Camomilla & Liquirizia",
            prezzo: 25,
            descrizione: "Costoletta di agnello alle erbe aromatiche con riduzione di camomilla e liquirizia",
            allergeni: [],
            tipo: "secondo",
            menu: "emozioni locali",
            icona: false,
            vegetariano: false
        },

        {
            id: 10,
            nome: "Zabaione al Marsala",
            prezzo: 8,
            descrizione: "Con foglie di mais di Battifollo e lingue di gatto artigianali",
            allergeni: [1, 3, 8, 10],
            tipo: "dolce",
            menu: "emozioni locali",
            icona: false,
            vegetariano: true
        },
        {
            id: 11,
            nome: "Lumache al Verde",
            prezzo: 19,
            descrizione: "Già sgusciate, preparate con burro, prezzemolo, aglio e un pizzico di peperoncino finale",
            allergeni: [3],
            tipo: "antipasto",
            menu: "l'essenza delle origini",
            icona: false,
            vegetariano: false
        },

        {
            id: 12,
            nome: "Trippa in Umido",
            prezzo: 16,
            descrizione: "Accompagnata dai fagioli bianchi di Bagnasco",
            allergeni: [12],
            tipo: "antipasto",
            menu: "l'essenza delle origini",
            icona: false,
            vegetariano: false
        },

        {
            id: 13,
            nome: "Tortelli ripieni di Lampredotto e Cece di Nucetto",
            prezzo: 18,
            descrizione: "Serviti con una salsa verde cremosa e delicata",
            allergeni: [1, 3, 10],
            tipo: "primo",
            menu: "l'essenza delle origini",
            icona: false,
            vegetariano: false
        },

        {
            id: 14,
            nome: "Finanziera Alla Vittorio",
            prezzo: 23,
            descrizione: "Preparata secondo la tradizione della vallata con petto di pollo, spezzatino di filetto, creste di gallo, animelle di vitello, filoni di midollo, granelle di toro, funghi sott'olio e aceto, sfumata al Marsala e completata con cervello di vitello fritto",
            allergeni: [1, 3, 4, 8, 11, 12],
            tipo: "secondo",
            menu: "l'essenza delle origini",
            icona: false,
            vegetariano: false
        },

        {
            id: 15,
            nome: "Sfera Magica",
            prezzo: 8,
            descrizione: "Sfera di cioccolato fondente ripiena di crema al caramello salato su cialda di Pavlova, terminata in sala con cioccolato caldo",
            allergeni: [3, 8],
            tipo: "dolce",
            menu: "l'essenza delle origini",
            icona: false,
            vegetariano: true
        },
        {
            id: 16,
            nome: "Capunet di Verza",
            prezzo: 16,
            descrizione: "Ripieno di riso, topinambur, cime di rapa e carote, servito con maionese al basmati e rifinito con scorza di limone",
            allergeni: [3, 10],
            tipo: "antipasto",
            menu: "identità vegetale",
            icona: false,
            vegetariano: true
        },

        {
            id: 17,
            nome: "Il Nostro Ramen Piemontese",
            prezzo: 16,
            descrizione: "Consommé di funghi orientali servito caldo con ingredienti selezionati per dare gusto e leggerezza al palato",
            allergeni: [1, 4, 8],
            tipo: "antipasto",
            menu: "identità vegetale",
            icona: false,
            vegetariano: true
        },

        {
            id: 18,
            nome: "Gnocchi di Patate e Castagne Bianche Garessine",
            prezzo: 18,
            descrizione: "Su crema di zucca profumata alla cannella, porro di Cervere croccante e germogli di wasabi",
            allergeni: [1, 3, 10],
            tipo: "primo",
            menu: "identità vegetale",
            icona: false,
            vegetariano: true
        },

        {
            id: 19,
            nome: "Selezione di Formaggi & Tisane Locali",
            prezzo: 24,
            descrizione: "Formaggi della nostra vallata dal più delicato al più stagionato abbinati a tisane biologiche di Nucetto",
            allergeni: [3, 11, 14],
            tipo: "secondo",
            menu: "identità vegetale",
            icona: false,
            vegetariano: true
        },

        {
            id: 20,
            nome: "Il Nostro Montebianco",
            prezzo: 8,
            descrizione: "Cialda di castagne, crema di marroni, panna montata e marron glacé prodotti a Nucetto",
            allergeni: [3, 8],
            tipo: "dolce",
            menu: "identità vegetale",
            icona: false,
            vegetariano: true
        }
    ]

    const menuDegustazione = [
        {
            id: 1,
            nome: "Emozioni Locali",
            menuKey: "emozioni locali",
            prezzo: 65,
        },
        {
            id: 2,
            nome: "L’Essenza delle Origini",
            menuKey: "l'essenza delle origini",
            prezzo: 55,
        },
        {
            id: 3,
            nome: "Identità Vegetale",
            menuKey: "identità vegetale",
            prezzo: 45,
        }
    ]

    const [filter, setFilter] = useState("all")

    let filteredMenu
    if (filter === "all") {
        filteredMenu = piatti
    } else if (filter === "vegetariano") {
        filteredMenu = piatti.filter(piatti => piatti.vegetariano === true)
    } else if (filter === "tipo") {
        filteredMenu = piatti
    } else if (filter === "menu") {
        filteredMenu = piatti
    }

    const piattiIcone = piatti.filter(piatto => piatto.icona === true)
    const piattiEmozioni = piatti.filter(piatto => piatto.menu === "emozioni locali")
    const piattiEssenza = piatti.filter(piatto => piatto.menu === "l'essenza delle origini")
    const piattiVegetale = piatti.filter(piatto => piatto.menu === "identità vegetale")

    const antipasti = piatti.filter(piatto => piatto.tipo === "antipasto")
    const primi = piatti.filter(piatto => piatto.tipo === "primo")
    const secondi = piatti.filter(piatto => piatto.tipo === "secondo")
    const dolci = piatti.filter(piatto => piatto.tipo === "dolce")

    const PiattoCard = ({ piatto }) => (
        <div className="piatto-card">
            <h3>{piatto.nome}</h3>
            <p>{piatto.descrizione}</p>
            <p>{piatto.prezzo}€</p>
        </div>
    )

    const Sezione = ({ titolo, lista }) => (
        <div className="menu-sezione">
            <h2>{titolo}</h2>
            <div className="piatti-grid">
                {lista.map(p => <PiattoCard key={p.id} piatto={p} />)}
            </div>
        </div>
    )

    return (
        <div className="menu-container">
            <div className="menu-filtri">
                <button onClick={() => setFilter("all")}>Tutti</button>
                <button onClick={() => setFilter("vegetariano")}>Vegetariano</button>
                <button onClick={() => setFilter("tipo")}>Per Tipo</button>
                <button onClick={() => setFilter("menu")}>Per Menù</button>
            </div>

            {filter === "all" && (
                <>
                    <Sezione titolo="Le Nostre Icone" lista={piattiIcone} />
                    <Sezione titolo="Emozioni Locali" lista={piattiEmozioni} />
                    <Sezione titolo="L'Essenza delle Origini" lista={piattiEssenza} />
                    <Sezione titolo="Identità Vegetale" lista={piattiVegetale} />
                </>
            )}

            {filter === "vegetariano" && (
                <>
                    <Sezione titolo="Antipasti Vegetariani" lista={filteredMenu.filter(p => p.tipo === "antipasto")} />
                    <Sezione titolo="Primi Vegetariani" lista={filteredMenu.filter(p => p.tipo === "primo")} />
                    <Sezione titolo="Secondi Vegetariani" lista={filteredMenu.filter(p => p.tipo === "secondo")} />
                    <Sezione titolo="Dolci Vegetariani" lista={filteredMenu.filter(p => p.tipo === "dolce")} />
                </>
            )}

            {filter === "tipo" && (
                <>
                    <Sezione titolo="Antipasti" lista={antipasti} />
                    <Sezione titolo="Primi" lista={primi} />
                    <Sezione titolo="Secondi" lista={secondi} />
                    <Sezione titolo="Dolci" lista={dolci} />
                </>
            )}

            {filter === "menu" && (
                <div className="menu-sezione">
                    <h2>I Nostri Menu Degustazione</h2>
                    <div className="piatti-grid">
                        {menuDegustazione.map((menu) => (
                            <div key={menu.id} className="piatto-card">
                                <h3>{menu.nome}</h3>
                                <p>{menu.prezzo}€</p>
                                {piatti.filter(p => p.menu === menu.menuKey).map(p => (
                                    <p key={p.id}>— {p.nome}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Menu