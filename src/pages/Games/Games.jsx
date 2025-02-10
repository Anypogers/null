import { Header } from "../../components/Header/Header";
import { TitleBar } from "../../components/TitleBar/TitleBar";

import styles from './Games.module.css'
import '../../global.css';

export function Games() {
  return (
    <>
      <Header/>
      <div>
        <div className={styles.headerBar}>
          <TitleBar text="Any's Game Sugestions"/>
        </div>
        <div className={styles.wrapper}>
          <main>
            <div>
              <p style={{fontSize:"1.5vw"}}>MY TEXT</p>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}