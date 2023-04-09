import Head from 'next/head'
import styles from '@/styles/Home.module.css'

const Contact = () => {
    return (
        <>
        <Head>
            <title>Página de Contato</title>
            <link rel="icon" href="/rotafavicon.ico" />
        </Head>
        <h1 className={styles.title}>Página de contato</h1>

        </>
    )
}

export default Contact