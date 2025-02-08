import styles from './Topbar.module.css';

export function Topbar({text}) {
  const title = getTitle(text);
  return (
    <div className={styles.topbar}>
      <div className={styles.title}>
        {title}
      </div>
    </div>
  );
}

function getTitle(text){
  const words = text.split(" ");
  return words.map((word, wordIndex) => (
    <div className={styles.word} key={wordIndex}>
      {word.split("").map((letter, letterIndex) => (
        <div className={styles.word_letter} key={letterIndex}>
          <strong>{letter}</strong>
        </div>
      ))}
    </div>
  ));
}