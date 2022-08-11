import { Link } from "react-router-dom";

import styles from './index.module.scss'

const Nav = () => {
    return (
        <header className={styles.container}> 
            <h1>To do APP</h1>
            <nav>
                <ul>
                    <li><Link to="/agregar"><button>AGREGAR TAREA</button></Link></li>
                    <li><Link to="/"><button>LISTADO</button></Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;