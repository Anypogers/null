import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './comment.module.css';

export function Comment() {
  return(
    <div className={styles.comment}>
      <img src="https://github.com/furlanrogerio.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <a href='https://github.com/furlanrogerio' className={styles.name}>Rogerio Furlan</a>
              <time title="October 27th, 02:22am" dateTime="27/10/2024 02:22am">Posted 4 days ago.</time>
            </div>
            <button title='Delete Comment'>
              <Trash size={24}/>
            </button>
          </header>
          <p><i>Interessante.</i></p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20}/>
            Like <span>69k</span>
          </button>
        </footer>
      </div>
    </div>
  );
}