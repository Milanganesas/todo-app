import styles from './index.module.scss'

const Nav = () => {

    const localDelete = () => {
        localStorage.clear();
        window.close();
    }
    
    return (
        <header className={styles.container}> 
            <h1>To do APP</h1>
            <nav>
                <ul>
                    <li><button onClick={localDelete}>Borrar todo!</button></li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;