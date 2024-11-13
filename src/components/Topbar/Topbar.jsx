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
        <div className={styles.word}>
          <div className={styles.word_letter}><strong>A</strong></div>
          <div className={styles.word_letter}><strong>n</strong></div>
          <div className={styles.word_letter}><strong>y</strong></div>
          <div className={styles.word_letter}><strong>p</strong></div>
          <div className={styles.word_letter}><strong>o</strong></div>
          <div className={styles.word_letter}><strong>g</strong></div>
          <div className={styles.word_letter}><strong>e</strong></div>
          <div className={styles.word_letter}><strong>r</strong></div>
          <div className={styles.word_letter}><strong>'</strong></div>
          <div className={styles.word_letter}><strong>s</strong></div>
        </div>
        <div className={styles.word}>
          <div className={styles.word_letter}><strong>G</strong></div>
          <div className={styles.word_letter}><strong>a</strong></div>
          <div className={styles.word_letter}><strong>m</strong></div>
          <div className={styles.word_letter}><strong>e</strong></div>
        </div>
        <div className={styles.word}>
          <div className={styles.word_letter}><strong>S</strong></div>
          <div className={styles.word_letter}><strong>u</strong></div>
          <div className={styles.word_letter}><strong>g</strong></div>
          <div className={styles.word_letter}><strong>e</strong></div>
          <div className={styles.word_letter}><strong>s</strong></div>
          <div className={styles.word_letter}><strong>t</strong></div>
          <div className={styles.word_letter}><strong>i</strong></div>
          <div className={styles.word_letter}><strong>o</strong></div>
          <div className={styles.word_letter}><strong>n</strong></div>
          <div className={styles.word_letter}><strong>s</strong></div>
        </div>
      </div>
    </div>
  );
}