import Link from 'next/link'

const NotFound = () => {
    return (
        <>
        <h1>404</h1>
        <p>Parece que está página não existe</p>
        <Link href="/">Voltar para Home</Link>

        </>
    )
}

export default NotFound