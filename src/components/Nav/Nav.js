import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <header> 
            <h1>To do APP</h1>
            <nav>
                <ul>
                    <li><Link to="/agregar">Agregar tarea</Link></li>
                    <li><Link to="/">Listado</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;