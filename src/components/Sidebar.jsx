import { PencilLine } from '@phosphor-icons/react';
import styles from './Sidebar.module.css';

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1721332149371-fa99da451baa?w=300&auto=format&fit=crop&q=40&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D"/>
            <div className={styles.profile}>
                <a href="https://github.com/Anypogers">
                <img
                    className={styles.avatar}
                    src="https://github.com/Anypogers.png"/>
                </a>
                <strong>Anypogers</strong>
                <span>Game Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu Perfil
                </a>
            </footer>
        </aside>
    );
}