
// W.I.P.
// NOT READY FOR USE
// NEED TO COME BACK TO THIS LATER

class TextStyle{
  constructor(styles = {}) {
    this.fontSize = styles.size || defaultStyles.fontSize;
    this.color = styles.color || defaultStyles.color;
    this.textDecoration = styles.decoration || defaultStyles.textDecoration;
    this.whiteSpace = styles.textWrap || defaultStyles.whiteSpace;
  }
}

const defaultStyles = {
  fontSize : '1vw',
  color : 'var(--white)',
  textDecoration : 'none',
  whiteSpace : 'normal'
}