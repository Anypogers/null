import {SpecialText} from '../SpecialText/SpecialText';
import styles from './TitleBar.module.css';

export function TitleBar({text, customStyle}) {
  return (
    <div className={styles.titlebar}>
      <SpecialText text={text} customStyle={customStyle}/>
    </div>
  );
}