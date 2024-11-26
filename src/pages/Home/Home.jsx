import { Header } from "../../components/Header/Header";
import { Topbar } from "../../components/Topbar/Topbar";

import * as dataManager from '../../../data/dataManager';

import styles from './Home.module.css'
import '../../global.css';

const dataPath = './data/games/';

export function Home() {
  return (
    <>s
      <Header/>
      <div>
        <div className={styles.headerBar}>
          <Topbar />
        </div>
        <div className={styles.wrapper}>
          <main>

          </main>
        </div>
      </div>
    </>
  )
}
