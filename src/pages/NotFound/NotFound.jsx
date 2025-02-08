import { Header } from "../../components/Header/Header";
import { Topbar } from "../../components/Topbar/Topbar";

import styles from './NotFound.module.css'
import '../../global.css';

export function NotFound() {
  return (
    <>
      <Header />
      <div className={styles.page}>
        <div className={styles.headerBar}>
          <Topbar text="404 - Page Not Found"/>
        </div>
      </div>
    </>
  )
}