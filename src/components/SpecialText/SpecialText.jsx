import styles from './SpecialText.module.css';

export function SpecialText({text = "text", customStyle = {}}) {
  let style = customStyle;
  style = {
    fontSize : customStyle.fontSize ? customStyle.fontSize : '2vw',
  }
  return (
    <div className={styles.title}>
      {getTitle(text, style)}
    </div>
  );
}

function getTitle(Text, style){
  const words = Text.split(" ");
  return words.map((word, wordIndex) => (
    <div className={styles.word} key={wordIndex}>
      {word.split("").map((letter, letterIndex) => (
        <div className={styles.word_letter} key={letterIndex}>
          <p style={style} className={styles.press_start}>{letter}</p>
        </div>
      ))}
    </div>
  ));
}