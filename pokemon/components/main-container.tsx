import { ReactNode } from 'react';
import Footer from './footer';
import Navbar2 from './Navbar2';

import styles from '../styles/MainContainer.module.css'

interface MainContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function MainContainer({ children, ...rest }: MainContainerProps) {
  // Renderiza o layout principal da aplicação com os filhos passados por props
  return (
    <>
      <Navbar2/>
        <div className={styles.container} {...rest}>{children}</div>
      <Footer/>
    </>
  )
}

export default MainContainer;