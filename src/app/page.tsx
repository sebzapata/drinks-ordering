"use client";

import { createContext, useContext, useState } from "react";
import { drinks } from "./drinks";
import styles from "./page.module.css";

export default function Home() {
  const [drinksSelected, setDrinksSelected] = useState<string[]>([]);

  const renderDrinksOptions = () => {
    return drinks.map((drink) => (
      <div className={styles.drinkWrapper} key={drink.name}>
        <span>
          <div style={{ alignContent: "center" }}>{drink.icon}</div>
          <div className={styles.drinkText}>
            <h2>{drink.name}</h2>
            <p>{drink.description}</p>
          </div>
        </span>
        <input
          type="checkbox"
          value={drink.id}
          checked={drinksSelected.includes(drink.id)}
          onChange={(event) => {
            if (event.target.checked) {
              setDrinksSelected([...drinksSelected, event.target.value]);
            } else {
              setDrinksSelected(
                drinksSelected.filter((id) => id !== event.target.value)
              );
            }
          }}
        />
      </div>
    ));
  };

  const renderErrorMessage = () => {
    if (drinksSelected.length > 2) {
      return "You can't order more than 2 drinks!";
    }

    if (drinksSelected.includes("EM") && drinksSelected.includes("FM")) {
      return "No ordering more than 1 martini drink. Let's not make things difficult.";
    }

    return null;
  };

  // Congrats on ordering 1 of each drink!

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h1 className={styles.header}>Sam's Special Drinks Menu</h1>
        <div className={styles.drinksList}>{renderDrinksOptions()}</div>
        <p style={{ color: "red", marginBottom: "8px", marginLeft: "auto" }}>
          {renderErrorMessage()}
        </p>
        <button
          disabled={!!renderErrorMessage()}
          style={{
            marginLeft: "auto",
            padding: "0.5rem",
            borderRadius: "0.5rem",
          }}
        >
          Confirm order
        </button>
      </div>
    </main>
  );
}
