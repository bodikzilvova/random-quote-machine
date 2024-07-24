import { useSelector } from "react-redux";
import styles from "./Text.module.css";
import { selectAuthor, selectQuote } from "../../redux/quotes/quotesSlice";

export const Text = () => {
  const quote = useSelector(selectQuote);
  const author = useSelector(selectAuthor);

  return (
    <div id="quote-text" className={styles.quoteText} style={{ opacity: "1" }}>
      <i className={`${styles.fa} ${styles.faQuoteLeft}`}></i>
      <span id="text">{quote}</span>
      <div className={styles.quoteAuthor} style={{ opcaity: "1" }}>
        - <span id="author">{author}</span>
      </div>
    </div>
  );
};
