import styles from './GlitchedText.module.css';

export function GlitchedText({text = "text", customStyle = {}}) {
  const style = customStyle;
  style.fontSize = customStyle.fontSize ? customStyle.fontSize : '2vw';
  return (
    <div className={styles.title}>
      {getText(text, style)}
    </div>
  );
}

function getText(Text, style){
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