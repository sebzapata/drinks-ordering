"use client";
import { useState } from "react";
import { drinks } from "./drinks";

import styles from "./page.module.css";

const apiKey = process.env.NEXT_PUBLIC_API_KEY || "";

export default function Home() {
  const [drinksSelected, setDrinksSelected] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const submitOrder = async () => {
    var options = {
      method: "POST",
      headers: {
        "cache-control": "no-cache",
        "x-apikey": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        drinksRequested: drinksSelected.join(", "),
        time: new Date(),
      }),
      json: true,
    };

    try {
      setIsSubmitting(true);
      await fetch("https://drinkorder-c5f4.restdb.io/rest/drinks", options);
      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (err) {
      setIsSubmitting(false);
      throw Error(`Error: $${err}`);
    }
  };
  const renderButtonSection = () => {
    if (isSubmitted) {
      return <p>Thank you for your order, it will be with you shortly!</p>;
    }

    return (
      <button
        disabled={
          !!renderErrorMessage() ||
          isSubmitted ||
          isSubmitting ||
          !drinksSelected.length
        }
        style={{
          marginLeft: "auto",
          padding: "0.5rem",
          borderRadius: "0.5rem",
        }}
        onClick={async () => {
          await submitOrder();
        }}
      >
        Confirm order
      </button>
    );
  };
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h1 className={styles.header}>Sam's Special Drinks Menu</h1>
        <div className={styles.drinksList}>{renderDrinksOptions()}</div>
        <p style={{ color: "red", marginBottom: "8px", marginLeft: "auto" }}>
          {renderErrorMessage()}
        </p>
        {renderButtonSection()}
      </div>
    </main>
  );
}
