import { Header } from "../../components/Header/Header";
import { GlitchedText } from "../../components/GlitchedText/GlitchedText";

import logo from '../../assets/AbsoluteSolver.png';
import styles from './NotFound.module.css'
import '../../global.css';

export function NotFound() {
  return (
    <>
      <Header />
      <div className={styles.page}>
        <div className={styles.headerBar}>
          <GlitchedText text="404 - Page"/>
          <img src={logo} className={styles.logo} alt="Logo"/>
          <GlitchedText text="Not Found"/>
        </div>
      </div>
    </>
  )
}