"use client";

import styles from "./bill.module.css";
import { useState } from "react";

export default function Home() {
  const drinksOrdered = ["Espresso martini", "Jameson on ice"];
  const currentDate = new Date();

  const [authenticated, setAuthenticated] = useState(false);

  if (currentDate.getHours() >= 0 && currentDate.getHours() < 9) {
    drinksOrdered.push("Post midnight besito tax");
  }

  const renderDrinksOrdered = () => {
    return drinksOrdered.map((drinkOrdered) => (
      <span key={drinkOrdered} style={{ display: "flex" }}>
        <p style={{ marginRight: "1rem" }}>{`${drinkOrdered}:`}</p>
        <p>1 kiss</p>
      </span>
    ));
  };

  const renderTotalSection = () => {
    return (
      <span style={{ display: "flex" }}>
        <strong style={{ marginRight: "1rem" }}>Total:</strong>
        <p>{`${drinksOrdered.length} ${
          drinksOrdered.length === 1 ? "kiss" : "kisses"
        }`}</p>
      </span>
    );
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.header}>Bill</h1>

        <hr
          className="border-2 opacity-100"
          style={{
            width: "100%",
            minWidth: "250px",
            margin: 0,
            marginBottom: "1rem",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            width: "100%",
          }}
        >
          {renderDrinksOrdered()}
        </div>
        <hr
          className="border-2 opacity-100"
          style={{
            width: "100%",
            minWidth: "250px",
            margin: 0,
            marginBottom: "1rem",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            width: "100%",
          }}
        >
          {renderTotalSection()}
        </div>
      </div>
    </main>
  );
}
