import Listado from "../Listado"

import styles from './index.module.scss'

const Home = ({tareas, setTareas, borradas, setBorradas}) => {

    return (
            <Listado tareas={tareas} setTareas={setTareas} borradas={borradas} setBorradas={setBorradas} />
    )
}

export default Home;