import { Header } from "../../components/Header/Header";
import { Topbar } from "../../components/Topbar/Topbar";
import { Post } from "../../components/Post/Post";

import styles from './Home.module.css'
import '../../global.css';

export function Home() {
  return (
    <>
      <Header/>
      <div>
        <div className={styles.headerBar}>
          <Topbar />
        </div>
        <div className={styles.wrapper}>
          <main>
            <Post />
          </main>
        </div>
      </div>
    </>
  )
}