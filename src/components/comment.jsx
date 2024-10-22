import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './comment.module.css';

export function Comment() {
  return(
    <div className={styles.comment}>
      <img src="https://github.com/Anypogers.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Anypogers</strong>
              <time title="10 de Setembro às 09:44h" dateTime="2024/09/10 09:44:00">Há 1h atrás</time>
            </div>
            <button title='Excluir Comentário'>
              <Trash size={24}/>
            </button>
          </header>
          <p>So true bestie</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20}/>
            Curtir <span>69</span>
          </button>
        </footer>
      </div>
    </div>
  );
}