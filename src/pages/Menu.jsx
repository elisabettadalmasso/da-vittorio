import { useState } from "react"
import "./Menu.css"
import { piatti } from "../components/data/piatti"
import { menuDegustazione } from "../components/data/menuDegustazione"

function Menu() {
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

    const PiattoCard = ({ piatto, index }) => (
        <div 
            className="piatto-card"
            data-aos="zoom-in"
            data-aos-delay={index * 50}
        >
            <h3>{piatto.nome}</h3>
            <p>{piatto.descrizione}</p>
            <p>{piatto.prezzo}€</p>
            {piatto.allergeni.length > 0 && (
                <p className="allergeni">Allergeni: {piatto.allergeni.join(", ")}</p>
            )}
        </div>
    )

    const Sezione = ({ titolo, lista }) => (
        <div className="menu-sezione">
            <h2 data-aos="fade-down">{titolo}</h2>
            <div className="piatti-grid">
                {lista.map((p, index) => <PiattoCard key={p.id} piatto={p} index={index} />)}
            </div>
        </div>
    )

    return (
        <>
            <div className="menu-container">
                <div className="menu-filtri" data-aos="fade-up">
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
                        <h2 data-aos="fade-down">I Nostri Menu Degustazione</h2>
                        <div>
                            {menuDegustazione.map((menu, index) => (
                                <div 
                                    key={menu.id} 
                                    className="menu-degustazione-card"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <h3>{menu.nome}</h3>
                                    <p className="menu-prezzo">{menu.prezzo}€</p>

                                    {piatti.filter(p => p.menu === menu.menuKey).map(p => (
                                        <p key={p.id}> {p.nome}</p>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <div className="allergeni-legenda" data-aos="fade-up">
                <h4>Allergeni</h4>
                <p>1. Glutine · 2. Crostacei · 3. Uova · 4. Pesce · 5. Arachidi · 6. Soia · 7. Latte · 8. Frutta a guscio · 9. Sedano · 10. Senape · 11. Sesamo · 12. Anidride solforosa · 13. Lupini · 14. Molluschi</p>
            </div>
        </>
    )
}

export default Menu