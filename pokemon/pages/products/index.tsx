import Head from 'next/head'
import styles from '@/styles/Home.module.css'

const Products = () => {
    return (
        <>
        <Head>
            <title>Página de Contato</title>
            <link rel="icon" href="/rodafavicon.ico" />
        </Head>
        <div>
            <h1 className={styles.title}>Página de Produtos</h1>
        </div>
        </>

    )
}

export default Products