import { Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { ThumbsUp } from '@phosphor-icons/react/dist/ssr';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/MarcosDevPF.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>João Vitor</strong>
                            <time title="15 de Novembro as 21:45" dataTime="2023-11-15 21:45:30">Cerca de 1h atrás </time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}