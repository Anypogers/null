import { Header } from "../../components/Header/Header";
import { Topbar } from "../../components/Topbar/Topbar";

import styles from './Games.module.css'
import '../../global.css';

export function Games() {
  return (
    <>
      <Header/>
      <div>
        <div className={styles.headerBar}>
          <Topbar text="Any's Game Sugestions"/>
        </div>
        <div className={styles.wrapper}>
          <main>
            
          </main>
        </div>
      </div>
    </>
  )
}