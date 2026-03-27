"use client";
import { useState } from "react";
import "./Menu.css";
import { dish, Dish } from "@/components/data/dish";
import { menuDegustazione } from "@/components/data/menuDegustazione";
import { wines, Wine } from "@/components/data/wine";

interface DishCardProps {
  dish: Dish;
  index: number;
}

interface SectionProps {
  title: string;
  list: Dish[];
}

interface WineCardProps {
  wine: Wine;
  index: number;
}

const DishCard = ({ dish: singleDish, index }: DishCardProps) => (
  <div className="dish-card" data-aos="zoom-in" data-aos-delay={index * 50}>
    <h3>{singleDish.name}</h3>
    <p>{singleDish.description}</p>
    <p>{singleDish.price}€</p>
    {singleDish.allergens.length > 0 && (
      <p className="allergens">Allergeni: {singleDish.allergens.join(", ")}</p>
    )}
  </div>
);

const Section = ({ title, list }: SectionProps) => (
  <div className="menu-section">
    <h2 data-aos="fade-down">{title}</h2>
    <div className="dish-grid">
      {list.map((d, index) => (
        <DishCard key={d.id} dish={d} index={index} />
      ))}
    </div>
  </div>
);

const WineCard = ({ wine, index }: WineCardProps) => (
  <div className="wine-card" data-aos="fade-up" data-aos-delay={index * 50}>
    <div className="wine-header">
      <h3>{wine.name}</h3>
      <p className="wine-price">{wine.price}€</p>
    </div>
    <p className="wine-winery">{wine.winery}</p>
    <p className="wine-region">{wine.region}</p>
    <p className="wine-grapes">{wine.grapes}</p>
    <p className="wine-year">{wine.year}</p>
  </div>
);

export default function MenuClient() {
  const [filter, setFilter] = useState("all");
  const [filterCountry, setFilterCountry] = useState<string | null>(null);
  const [filterRegion, setFilterRegion] = useState<string | null>(null);
  const countries = Array.from(new Set(wines.map((w) => w.country))).sort();
  const getRegionsByCountry = (country: string) => {
    return Array.from(
      new Set(wines.filter((w) => w.country === country).map((w) => w.region)),
    ).sort();
  };

  let filteredMenu: Dish[] = dish;
  if (filter === "all") {
    filteredMenu = dish;
  } else if (filter === "vegetarian") {
    filteredMenu = dish.filter((dish) => dish.vegetarian === true);
  } else if (filter === "type") {
    filteredMenu = dish;
  } else if (filter === "menu") {
    filteredMenu = dish;
  }

  const dishesIcone = dish.filter((d) => d.signatureMenu === true);
  const dishesEmozioni = dish.filter((d) => d.menu === "emozioni locali");
  const dishesEssenza = dish.filter(
    (d) => d.menu === "l'essenza delle origini",
  );
  const dishesVegetale = dish.filter((d) => d.menu === "identità vegetale");

  const starters = dish.filter((d) => d.type === "antipasto");
  const firstCourses = dish.filter((d) => d.type === "primo");
  const secondCourses = dish.filter((d) => d.type === "secondo");
  const desserts = dish.filter((d) => d.type === "dolce");

  return (
    <>
      <div className="responsive-section">
        <div className="menu-container">
          <div className="menu-filter" data-aos="fade-up">
            <button onClick={() => setFilter("all")}>Tutti</button>
            <button onClick={() => setFilter("vegetarian")}>Vegetariano</button>
            <button onClick={() => setFilter("type")}>Per Tipo</button>
            <button onClick={() => setFilter("menu")}>Per Menù</button>
            <button onClick={() => setFilter("wine")}>Carta dei Vini</button>
          </div>

          {filter === "all" && (
            <>
              <Section title="Le Nostre Icone" list={dishesIcone} />
              <Section title="Emozioni Locali" list={dishesEmozioni} />
              <Section title="L'Essenza delle Origini" list={dishesEssenza} />
              <Section title="Identità Vegetale" list={dishesVegetale} />
            </>
          )}

          {filter === "vegetarian" && (
            <>
              <Section
                title="Antipasti Vegetariani"
                list={filteredMenu.filter((p) => p.type === "antipasto")}
              />
              <Section
                title="Primi Vegetariani"
                list={filteredMenu.filter((p) => p.type === "primo")}
              />
              <Section
                title="Secondi Vegetariani"
                list={filteredMenu.filter((p) => p.type === "secondo")}
              />
              <Section
                title="Dolci Vegetariani"
                list={filteredMenu.filter((p) => p.type === "dolce")}
              />
            </>
          )}

          {filter === "type" && (
            <>
              <Section title="Antipasti" list={starters} />
              <Section title="Primi" list={firstCourses} />
              <Section title="Secondi" list={secondCourses} />
              <Section title="Dolci" list={desserts} />
            </>
          )}

          {filter === "menu" && (
            <div className="menu-section">
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

                    {dish
                      .filter((p) => p.menu === menu.menuKey)
                      .map((p) => (
                        <p key={p.id}> {p.name}</p>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          )}
          {filter === "wine" && (
            <div className="wines-section">
              <h2 data-aos="fade-down">Carta dei Vini</h2>

              {/* Breadcrumb Navigation - Path to go back */}
              {(filterCountry || filterRegion) && (
                <div className="wine-breadcrumb" data-aos="fade-right">
                  <button
                    onClick={() => {
                      setFilterCountry(null);
                      setFilterRegion(null);
                    }}
                  >
                    Vini
                  </button>
                  {filterCountry && (
                    <>
                      <span> → </span>
                      <button onClick={() => setFilterRegion(null)}>
                        {filterCountry}
                      </button>
                    </>
                  )}
                  {filterRegion && (
                    <>
                      <span> → </span>
                      <span className="current">{filterRegion}</span>
                    </>
                  )}
                </div>
              )}

              {/* Level 1: Country Selection */}
              {!filterCountry && (
                <div className="wine-country-buttons">
                  <p className="filter-instruction">Seleziona un paese:</p>
                  <div className="wine-filter-grid">
                    {countries.map((country) => (
                      <button
                        key={country}
                        className="wine-filter-btn"
                        onClick={() => setFilterCountry(country)}
                        data-aos="zoom-in"
                      >
                        {country}
                        <span className="wine-count">
                          ({wines.filter((w) => w.country === country).length})
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Level 2: Region Selection */}
              {filterCountry && !filterRegion && (
                <div className="wine-region-buttons">
                  <p className="filter-instruction">
                    Seleziona una regione di {filterCountry}:
                  </p>
                  <div className="wine-filter-grid">
                    {getRegionsByCountry(filterCountry).map((region) => (
                      <button
                        key={region}
                        className="wine-filter-btn"
                        onClick={() => setFilterRegion(region)}
                        data-aos="fade-up"
                      >
                        {region}
                        <span className="wine-count">
                          (
                          {
                            wines.filter(
                              (w) =>
                                w.country === filterCountry &&
                                w.region === region,
                            ).length
                          }
                          )
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Level 3: Display Wines from Selected Region */}
              {filterCountry && filterRegion && (
                <div className="wine-list">
                  <div className="wine-grid">
                    {wines
                      .filter(
                        (w) =>
                          w.country === filterCountry &&
                          w.region === filterRegion,
                      )
                      .map((wine, index) => (
                        <WineCard key={wine.id} wine={wine} index={index} />
                      ))}
                  </div>
                </div>
              )}

              {/* PDF Download Link - Always visible at the bottom */}
              <div className="pdf-download" data-aos="zoom-in">
                <p>
                  Consulta la carta completa con tutte le annate disponibili
                </p>
                <a
                  href="/carta-vini.pdf"
                  className="download-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Scarica Carta Vini PDF
                </a>
              </div>
            </div>
          )}
        </div>
        {filter !== "wine" && (
          <div className="allergens-legend" data-aos="fade-up">
            <h4>Allergeni</h4>
            <p>
              1. Glutine · 2. Crostacei · 3. Uova · 4. Pesce · 5. Arachidi · 6.
              Soia · 7. Latte · 8. Frutta a guscio · 9. Sedano · 10. Senape ·
              11. Sesamo · 12. Anidride solforosa · 13. Lupini · 14. Molluschi
            </p>
          </div>
        )}
      </div>
    </>
  );
}
