import styles from "./Text.module.css";

export const Text = () => {
  return (
    <div id="quote-text" className={styles.quoteText} style={{ opacity: "1" }}>
      <i className={`${styles.fa} ${styles.faQuoteLeft}`}></i>
      <span id="text">
        Challenges are what make life interesting and overcoming them is what
        makes life meaningful.
      </span>
      <div className={styles.quoteAuthor} style={{ opcaity: "1" }}>
        - <span id="author">Joshua J. Marine</span>
      </div>
    </div>
  );
};
