import { Header } from "./components/Header";
import { Topbar } from "./components/Topbar";
import { Post } from "./components/Post";

import styles from './App.module.css'
import './global.css';


export function App() {
  return (
    <div>
      <div className={styles.headerBar}>
        <Header/>
        <Topbar />
      </div>
      <div className={styles.wrapper}>
        <main>
          <Post />
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}