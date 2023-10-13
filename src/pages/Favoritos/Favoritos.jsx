import Titulo from '../../components/Titulo/Titulo';
import Banner from '../../components/Banner/Banner';
import styles from './Favoritos.module.css';
import Card from '../../components/Card/Card';
import { useFavoritoContext } from '../../contextos/Favoritos';

export default function Favoritos() {
    const { favorito } = useFavoritoContext();
    return (
        <>
            <Banner imagem='home' />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>
        </>
    )
}