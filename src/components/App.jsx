import { Wrapper } from "./Wrapper/Wrapper";
import styles from "./App.module.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchQuotes } from "../redux/quotes/quotesOperation";
import { changeColors } from "../utils";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuotes()).unwrap().then(() => {
      changeColors();
    }).catch((error) => {
      console.error("Failed to fetch quotes: ", error);
    });
  }, [dispatch]);

  return (
    <div>
      <Wrapper></Wrapper>
      <div className={styles.footer}>
        by
        <a
          className={styles.link}
          target="_blank"
          rel="noreferrer"
          href="https://github.com/bodikzilvova"
        >
          {" "}
          bodikZiLvova
        </a>
      </div>
    </div>
  );
};
