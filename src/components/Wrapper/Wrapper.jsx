import { Text } from "../Text/Text";
import { ButtonWrapper } from "../ButtonWrapper/ButtonWrapper";
import styles from "./Wrapper.module.css";

export const Wrapper = () => {
  return (
    <div id="wrapper">
      <div id="quote-box" className={styles.quoteBox}>
        <Text />
        <ButtonWrapper />
      </div>
    </div>
  );
};
