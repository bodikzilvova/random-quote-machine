import { Wrapper } from "./Wrapper/Wrapper"
import styles from "./App.module.css"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchQuotes } from "../redux/quotes/quotesOperation";

export const App = ()=> {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchQuotes());
    }, [dispatch]);


    return <div>
 <Wrapper></Wrapper>
<div className={styles.footer}>
        by
          <a className={styles.link} href="https://github.com/bodikzilvova"> bodikZiLvova</a>
        </div>
    </div>
   
}

