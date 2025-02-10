import { Header } from "../../components/Header/Header";
import { TitleBar } from "../../components/TitleBar/TitleBar";

import styles from './Home.module.css'

export function Home() {
  return (
    <>
      <Header/>
      <div>
        <div className={styles.headerBar}>
          <TitleBar text="Anypoger's Cool Website!" textSize='3vw'/>
        </div>
        <div className={styles.wrapper}>
          <main>
            <h1>I don't know what to put here</h1>
            <h5><i>lol</i></h5>
          </main>
        </div>
      </div>
    </>
  )
}
