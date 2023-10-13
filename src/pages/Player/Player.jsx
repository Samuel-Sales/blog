import Banner from '../../components/Banner/Banner';
import styles from './Player.module.css';
import Titulo from '../../components/Titulo/Titulo';
import videos from '../../json/db.json';
import { useParams } from 'react-router-dom';
import NaoEncontrada from '../NaoEncontrada/NaoEncontrada';

export default function Player() {
    const parametro = useParams();
    const video = videos.find((video) => {
        return video.id === Number(parametro.id);
    });
    
    if (!video) {
        return <NaoEncontrada />
    }

    return (
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe 
                    width="100%" 
                    height="100%" 
                    src={video.link} 
                    title={video.titulo} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                >
                </iframe>
            </section>
        </>
    )
}