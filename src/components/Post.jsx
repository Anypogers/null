import { Comment } from "./comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/Anypogers.png"
          />
          <div className={styles.authorInfo}>
            <strong>Anypogers</strong>
            <span>Game Developer</span>
          </div>
        </div>
        <time title="October 27th, 02:22am" dateTime="27/10/2024 02:22am">
          Posted 4 days ago.
        </time>
      </header>
      <div className={styles.content}>
        <p>Yooooo</p>
        <p>Just started playing In Stars and Time, massive banger ngl.</p>
        <img className={styles.postImage} src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/2x1_NSwitchDS_InStarsAndTime_image1600w.jpg" alt="In Stars and Time"/>
        <p className={styles.tags}>
          <a href="#">#gaming</a>
          <a href="#">#instarsandtime</a>
          <a href="#">#indiegames</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Leave a comment!</strong>
        <textarea placeholder="Text goes here!"></textarea>
        <footer>
          <button type="submit">Post</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
      </div>
    </article>
  );
}
