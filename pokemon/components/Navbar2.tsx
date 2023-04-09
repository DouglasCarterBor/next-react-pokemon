import Link from "next/link"
import styles from '../styles/Navbar2.module.css'

const Navbar2 = () => {
    return(
        <>
        <div className={styles.navbar2}>
        <Link href="/">Home</Link>
        <Link href="/about">Sobre nós</Link>
        <Link href="/products">Produtos</Link>
        <Link href="/contact">Contatos</Link>
        <Link href="/todos">Contatos</Link>
        </div>
        </>
    )
}

export default Navbar2