import Link from 'next/link'

const NavBar = () => {
    return (
      <div>
        <br></br>
             <ul>
                <li>
                <Link href="/" legacyBehavior><a href="/">Home</a></Link>
                </li>
                <br></br>
                <Link href="/products" legacyBehavior><a href="/products">Produtos</a></Link>
                <br></br>
                <Link href="/about" legacyBehavior><a href="/about">Sobre Nós</a></Link>

            </ul>
      </div>
    )
  }

  export default NavBar
