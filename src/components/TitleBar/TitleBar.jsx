import {SpecialText} from '../SpecialText/SpecialText';
import styles from './TitleBar.module.css';

export function TitleBar({text, textSize, color, customStyle}) {
  return (
    <div className={styles.titlebar}>
      <SpecialText text={text} textSize={textSize} color={color}/>
    </div>
  );
}