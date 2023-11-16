import { PencilLine } from '@phosphor-icons/react';
import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&auto=format&fit=crop&q=40&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D"
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/MarcosDevPF.png" />

                <strong>Marco Túlio</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}