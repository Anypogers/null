import { Header } from "../../components/Header/Header";
import { TitleBar } from "../../components/TitleBar/TitleBar";

import styles from './Games.module.css'
import '../../global.css';

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
              <p style={{fontSize:"1.5vw"}} >MY TEXT</p>
            </div>
          </main>
        </div>
      </section>
    </>
  )
}