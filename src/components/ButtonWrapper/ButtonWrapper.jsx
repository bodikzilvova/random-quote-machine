import { useDispatch } from "react-redux";
import styles from "./ButtonWrapper.module.css";
import { fetchQuotes } from "../../redux/quotes/quotesOperation";

export const ButtonWrapper = () => {
const dispatch = useDispatch();

const handleNewQuote = ()=> {
dispatch(fetchQuotes());
}

  return (
    <div className={styles.buttons}>
      <a
        className={`${styles.button} ${styles.tweetQuote}`}
        id="tweet-quote"
        title="Tweet is quote!"
        target="_top"
        href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22A%20person%20who%20never%20made%20a%20mistake%20never%20tried%20anything%20new.%22%20%20Albert%20Einstein"
      >
        <i className="fa fa-twitter"></i>
      </a>

      <a
        className={`${styles.button} ${styles.tumblrQuote}`}
        id="tumblr-quote"
        title="Post this quote on tumbler!"
        target="_blank"
        rel="noreferrer"
        href="https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=%20Albert%20Einstein&content=A%20person%20who%20never%20made%20a%20mistake%20never%20tried%20anything%20new.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
      >
        <i className="fa fa-tumblr"></i>
      </a>

      <button
        className={`${styles.button} ${styles.btnNewQuote}`}
        id="new-quote"
        onClick={handleNewQuote}
      >
        New quote
      </button>
    </div>
  );
};
