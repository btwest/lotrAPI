import React, { useState, useEffect } from "react";
import styles from "./dashboard.module.css";
import Options from "./Options";
import useFetchData from "../hooks/useFetchData";

export default function Dashboard() {
  const [truthy, setTruthy] = useState(false);
  const { data, loading, error } = useFetchData;

  const questions = ["character", "movie", "book"];

  function onClickHandler() {
    setTruthy(!truthy);
  }

  return (
    <div className={styles.dashboard}>
      <Options />
    </div>
  );
}
