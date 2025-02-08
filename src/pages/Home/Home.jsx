import { Header } from "../../components/Header/Header";
import { Topbar } from "../../components/Topbar/Topbar";

import styles from './Home.module.css'

export function Home() {
  return (
    <>
      <Header/>
      <div>
        <div className={styles.headerBar}>
          <Topbar text="Anypoger's Cool Website!"/>
        </div>
        <div className={styles.wrapper}>
          <main>
            <h1>I don't know what to put here</h1>
              <p> </p>
            <h4><i>lol</i></h4>
          </main>
        </div>
      </div>
    </>
  )
}
