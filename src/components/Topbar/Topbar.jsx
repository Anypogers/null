import styles from './Topbar.module.css';

export function Topbar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.opProfile}>
        <div className={styles.profile}>
          <a href="https://github.com/Anypogers">
            <img
              className={styles.avatar}
              src="https://github.com/Anypogers.png" />
          </a>
          <strong>Anypogers</strong>
          <span>Game Developer</span>
        </div>
        <footer>
          <a href="#">
            Follow
          </a>
        </footer>
      </div>
      <div className={styles.title}>
        <strong>Anypoger's Posts</strong>
      </div>
    </div>
  );
}