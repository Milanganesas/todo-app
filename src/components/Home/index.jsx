import Listado from "../Listado"

import styles from './index.module.scss'

const Home = ({tareas, setTareas}) => {

    return (
            <Listado tareas={tareas} setTareas={setTareas}/>
    )
}

export default Home;