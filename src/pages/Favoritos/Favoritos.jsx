import Titulo from '../../components/Titulo/Titulo';
import Banner from '../../components/Banner/Banner';
import styles from './Favoritos.module.css';
import Card from '../../components/Card/Card';

export default function Favoritos() {
    return (
        <>
            <Banner imagem='home' />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                <Card id='1' titulo='ninguem' />
            </section>
        </>
    )
}