import { Header } from "../../components/Header/Header";
import { TitleBar } from "../../components/TitleBar/TitleBar";
import { Recomendations } from "./Recomendations";

import styles from './Games.module.css'

export function Games() {
  const titleBarStyle = {
    textDecoration: 'underline',
    fontWeight: 'bold',
    fontStyle: 'italic'
  }
  return (
    <>
      <Header/>
      <section className={styles.headerBar}>
        <TitleBar text="Any's Game Sugestions" customStyle={titleBarStyle}/>
      </section>
      <section>
        <div className={styles.wrapper}>
          <main>
            <div>
              <Recomendations />
            </div>
          </main>
        </div>
      </section>
    </>
  )
}