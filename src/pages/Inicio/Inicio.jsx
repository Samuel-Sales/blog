import Banner from '../../components/Banner/Banner';
import Titulo from '../../components/Titulo/Titulo';
import Card from '../../components/Card/Card';
import videos from '../../json/db.json';
import styles from './Inicio.module.css';

export default function Inicio() {
    return (
        <>
            
            <Banner imagem='home' />
            <Titulo>
                <h1>Os melhores videos de CSGO do Youtube!</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
            
        </>
    )
}