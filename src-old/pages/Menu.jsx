import { useState } from "react"
import "./Menu.css"
import { dish } from "../components/data/dish"
import { menuDegustazione } from "../components/data/menuDegustazione"
import { Helmet } from 'react-helmet-async';

function Menu() {
    const [filter, setFilter] = useState("all")

    let filteredMenu
    if (filter === "all") {
        filteredMenu = dish
    } else if (filter === "vegetarian") {
        filteredMenu = dish.filter(dish => dish.vegetarian === true)
    } else if (filter === "type") {
        filteredMenu = dish
    } else if (filter === "menu") {
        filteredMenu = dish
    }

    const piattiIcone = dish.filter(piatto => piatto.signatureMenu === true)
    const piattiEmozioni = dish.filter(piatto => piatto.menu === "emozioni locali")
    const piattiEssenza = dish.filter(piatto => piatto.menu === "l'essenza delle origini")
    const piattiVegetale = dish.filter(piatto => piatto.menu === "identità vegetale")

    const starters = dish.filter(piatto => piatto.type === "antipasto")
    const firstCourses = dish.filter(piatto => piatto.type === "primo")
    const secondCourses = dish.filter(piatto => piatto.type === "secondo")
    const desserts = dish.filter(piatto => piatto.type === "dolce")

    const PiattoCard = ({ piatto, index }) => (
        <div
            className="piatto-card"
            data-aos="zoom-in"
            data-aos-delay={index * 50}
        >
            <h3>{piatto.name}</h3>
            <p>{piatto.description}</p>
            <p>{piatto.price}€</p>
            {piatto.allergens.length > 0 && (
                <p className="allergens">Allergeni: {piatto.allergens.join(", ")}</p>
            )}
        </div>
    )

    const Sezione = ({ title, lista }) => (
        <div className="menu-sezione">
            <h2 data-aos="fade-down">{title}</h2>
            <div className="dish-grid">
                {lista.map((p, index) => <PiattoCard key={p.id} piatto={p} index={index} />)}
            </div>
        </div>
    )

    return (
        <>
            <Helmet>
                <title>Menu - Da Vittorio | Piatti della Tradizione Piemontese</title>
                <meta
                    name="description"
                    content="Scopri il nostro menu: tajarin al tartufo, ravioli al tovagliolo, finanziera, vitello tonnato e le specialità della Val Tanaro. Menu degustazione disponibili."
                />

                {/* Open Graph */}
                <meta property="og:title" content="Menu - Da Vittorio" />
                <meta property="og:description" content="Tajarin al tartufo, ravioli al tovagliolo e specialità piemontesi della Val Tanaro" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.ristorantedavittorio.it/menu" />
                <meta property="og:image" content="https://www.ristorantedavittorio.it/gallery/dish/tagliolinitartufo.jpg" />
            </Helmet>
            <div className="menu-container">
                <div className="menu-filtri" data-aos="fade-up">
                    <button onClick={() => setFilter("all")}>Tutti</button>
                    <button onClick={() => setFilter("vegetarian")}>Vegetariano</button>
                    <button onClick={() => setFilter("type")}>Per Tipo</button>
                    <button onClick={() => setFilter("menu")}>Per Menù</button>
                </div>

                {filter === "all" && (
                    <>
                        <Sezione title="Le Nostre Icone" lista={piattiIcone} />
                        <Sezione title="Emozioni Locali" lista={piattiEmozioni} />
                        <Sezione title="L'Essenza delle Origini" lista={piattiEssenza} />
                        <Sezione title="Identità Vegetale" lista={piattiVegetale} />
                    </>
                )}

                {filter === "vegetarian" && (
                    <>
                        <Sezione title="Antipasti Vegetariani" lista={filteredMenu.filter(p => p.type === "antipasto")} />
                        <Sezione title="Primi Vegetariani" lista={filteredMenu.filter(p => p.type === "primo")} />
                        <Sezione title="Secondi Vegetariani" lista={filteredMenu.filter(p => p.type === "secondo")} />
                        <Sezione title="Dolci Vegetariani" lista={filteredMenu.filter(p => p.type === "dolce")} />
                    </>
                )}

                {filter === "type" && (
                    <>
                        <Sezione title="Antipasti" lista={starters} />
                        <Sezione title="Primi" lista={firstCourses} />
                        <Sezione title="Secondi" lista={secondCourses} />
                        <Sezione title="Dolci" lista={desserts} />
                    </>
                )}

                {filter === "menu" && (
                    <div className="menu-sezione">
                        <h2 data-aos="fade-down">I Nostri Menu Degustazione</h2>
                        <div>
                            {menuDegustazione.map((menu, index) => (
                                <div
                                    key={menu.id}
                                    className="tasting-menu-card"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <h3>{menu.name}</h3>
                                    <p className="menu-price">{menu.price}€</p>

                                    {dish.filter(p => p.menu === menu.menuKey).map(p => (
                                        <p key={p.id}> {p.name}</p>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <div className="allergens-legend" data-aos="fade-up">
                <h4>Allergeni</h4>
                <p>1. Glutine · 2. Crostacei · 3. Uova · 4. Pesce · 5. Arachidi · 6. Soia · 7. Latte · 8. Frutta a guscio · 9. Sedano · 10. Senape · 11. Sesamo · 12. Anidride solforosa · 13. Lupini · 14. Molluschi</p>
            </div>
        </>
    )
}

export default Menu