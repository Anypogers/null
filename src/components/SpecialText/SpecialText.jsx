import styles from './SpecialText.module.css';

export function SpecialText({text = "text", customStyle = {}}) {
  return (
    <div className={styles.title}>
      {getTitle(text, customStyle)}
    </div>
  );
}

function getTitle(Text, customStyle){
  console.log("Hello World!")
  const words = Text.split(" ");
  return words.map((word, wordIndex) => (
    <div className={styles.word} key={wordIndex}>
      {word.split("").map((letter, letterIndex) => (
        <div className={styles.word_letter} key={letterIndex}>
          <p style={customStyle}>{letter}</p>
        </div>
      ))}
    </div>
  ));
}