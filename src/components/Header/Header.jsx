import styles from './Header.module.css';

import logo from '../../assets/AbsoluteSolver.png';

export function Header(){
  return(
    <header  className={styles.header}>
      <div className={styles.logo_bg}>
        <a href="#/"><img src={logo} className={styles.logo} alt="Logo"/></a>
      </div>
    </header>
  );
}