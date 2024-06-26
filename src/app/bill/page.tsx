"use client";

import { useEffect, useState } from "react";
import styles from "./bill.module.css";

const drinkNamesObject = {
  EM: "Espresso martini",
  FM: "French martini",
  PM: "Porn star martini",
  JOI: "Jameson on ice",
  VSW: "Vodka, tropical juice & soda water",
  GOC: "Glass of cava",
  GOW: "Glass of wine",
};

const apiKey = process.env.NEXT_PUBLIC_API_KEY || "";

export default function Page() {
  const [drinksOrdered, setDrinksOrdered] = useState<string[]>([]);
  const [time, setTime] = useState("");
  const [orderNumber, setOrderNumber] = useState(0);

  useEffect(() => {
    const fetchDrinkData = async () => {
      var options = {
        method: "GET",

        headers: {
          "cache-control": "no-cache",
          "x-apikey": apiKey,
        },
      };

      const response = await fetch(
        "https://drinksorder-df33.restdb.io/rest/drinks",
        options
      );

      const rawDrinksData = await response.json();

      const latestOrder = rawDrinksData[rawDrinksData.length - 1];
      const latestDrinks: string[] = latestOrder.drinksRequested.split(", ");

      const drinkNames = latestDrinks.map(
        (drink) => drinkNamesObject[drink as keyof typeof drinkNamesObject]
      );

      const currentDate = new Date();

      if (currentDate.getHours() >= 0 && currentDate.getHours() < 9) {
        drinkNames.push("Post midnight besito tax");
      }

      setDrinksOrdered(drinkNames);
      setOrderNumber(rawDrinksData.length);

      const orderTime = new Date(latestOrder.time);
      setTime(
        `${String(orderTime.getHours()).padStart(2, "0")}:${String(
          orderTime.getMinutes()
        ).padStart(2, "0")}`
      );
    };

    fetchDrinkData();
  }, []);

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
        <h1 className={styles.header}>{`Bill - #${orderNumber}, ${time}`}</h1>

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
