import styles from './Portfolio.module.css'

export function Portfolio() {
  return (
    <>
      <header>
        Portfolio
      </header>
      <section>

      </section>
      <footer>
        <section>
          <div className={styles.footerGit}>
            <a href="https://github.com/Anypogers">
              <img src="https://github.com/Anypogers.png"/>
              GitHub
            </a>
          </div>
        </section>
      </footer>
    </>
  )
}