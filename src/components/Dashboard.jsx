import React, { useState, useEffect } from "react";
import styles from "./dashboard.module.css";
import Options from "./Options";
import useFetchData from "../hooks/useFetchData";
import Characters from "./Characters";
import Books from "./Books";
import Movies from "./Movies";

export default function Dashboard() {
  const [selection, setSelection] = useState(null);
  const { data, loading, error } = useFetchData(selection);

  const questions = ["character", "movie", "book"];

  function onClickHandler(clickedButton) {
    return () => {
      setSelection(clickedButton);
    };
  }

  const dataRender = {
    character: <Characters />,
    book: <Books />,
    movie: <Movies />,
  };

  return (
    <div className={styles.dashboard}>
      <div>
        <h1>LOTR INFO</h1>
        <Options selection={selection} setSelection={onClickHandler} />
        {data && !loading && dataRender[selection]}
      </div>
    </div>
  );
}
