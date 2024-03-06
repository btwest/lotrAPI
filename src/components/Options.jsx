import React from "react";
import styles from "./options.module.css";

export default function Options() {
  const questions = ["character", "movie", "book"];

  //the-one-api.dev/v2
  https: return (
    <div>
      <h1>LOTR INFO</h1>
      {questions.map((question, index) => {
        return (
          <button className={styles.button} key={index}>
            {question}
          </button>
        );
      })}
    </div>
  );
}
