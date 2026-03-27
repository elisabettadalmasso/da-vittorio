"use client";
import { useState } from "react";
import "./Menu.css";
import { dish, Dish } from "@/components/data/dish";
import { menuDegustazione } from "@/components/data/menuDegustazione";

interface DishCardProps {
  dish: Dish;
  index: number;
}

interface SectionProps {
  title: string;
  list: Dish[];
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

export default function MenuClient() {
  const [filter, setFilter] = useState("all");

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
        </div>
        <div className="allergens-legend" data-aos="fade-up">
          <h4>Allergeni</h4>
          <p>
            1. Glutine · 2. Crostacei · 3. Uova · 4. Pesce · 5. Arachidi · 6.
            Soia · 7. Latte · 8. Frutta a guscio · 9. Sedano · 10. Senape · 11.
            Sesamo · 12. Anidride solforosa · 13. Lupini · 14. Molluschi
          </p>
        </div>
      </div>
    </>
  );
}
