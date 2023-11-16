import styles from './Post.module.css';

export default function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/MarcosDevPF.png" />
                    <div className={styles.authorInfo}>
                        <strong>Marco Túlio</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="15 de Novembro as 21:45" dataTime="2023-11-15 21:45:30">Publicado a 1h </time>
            </header>

            <div className={styles.content}>
            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p>👉<a href="">jane.design/doctorcare</a></p>
            <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>
    );
}