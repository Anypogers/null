import { Header } from "../../components/Header/Header";
import { TitleBar } from "../../components/TitleBar/TitleBar";

import styles from './NotFound.module.css'
import '../../global.css';

export function NotFound() {
  return (
    <>
      <Header />
      <div className={styles.page}>
        <div className={styles.headerBar}>
          <TitleBar text="404 - Page Not Found"/>
        </div>
      </div>
    </>
  )
}