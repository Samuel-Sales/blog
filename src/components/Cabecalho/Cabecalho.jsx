import { Link } from 'react-router-dom';
import styles from './Cabecalho.module.css';
import logo from './logoHeader.png';
import CabecalhoLink from '../CabecalhoLink/CabecalhoLink';
// import CabecalhoLink from './components/CabecalhoLink/CabecalhoLink';

export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to='./'>
                <img className={styles.logo} src={logo} alt="Logo do cinetag" />
            </Link>
            <nav>
                <CabecalhoLink url="./">
                    Home
                </CabecalhoLink>
                <CabecalhoLink url="./Favoritos">
                    Favoritos
                </CabecalhoLink>
            </nav>
        </header>
    )
}