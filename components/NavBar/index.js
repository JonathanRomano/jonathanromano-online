import Link from "next/link"
import styles from "./navBar.module.css"

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <Link href="/">
        <a className={styles.title}>
          <h1>Jonathan Lauxen Romano</h1>
        </a>
      </Link>

      <div className={styles.itens}>
        <Link href="/about">
          <a className={styles.item}>
            About me
          </a>
        </Link>

        <Link href="/portifolio">
          <a className={styles.item}>
            Portifolio
          </a>
        </Link>

        <Link href="/blog">
          <a className={styles.item}>
            Blog
          </a>
        </Link>
      </div>

    </div>
  )
}

export default NavBar