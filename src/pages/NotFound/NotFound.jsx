import { Header } from "../../components/Header/Header";
import { GlitchedText } from "../../components/GlitchedText/GlitchedText";

import logo from '../../assets/AbsoluteSolver.png';
import styles from './NotFound.module.css'
import '../../global.css';

export function NotFound() {
  return (
    <>
      <Header />
      <section className={styles.firstSection}>
        <div className={styles.headerBar}>
          <GlitchedText text="404 - Page"/>
          <img src={logo} className={styles.logo} alt="Logo"/>
          <GlitchedText text="Not Found"/>
        </div>
      </section>
      <section>
        <div className={styles.marquee}>
          <div className={`${styles.marqueeContent} ${styles.scroll}`}>
            the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never
          </div>
          <div className={`${styles.marqueeContent} ${styles.scroll}`}>
            the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never
          </div>
        </div>
      </section>
    </>
  )
}

function marqueeText() {
  text = 0
  return text;
}