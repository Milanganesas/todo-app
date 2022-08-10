import Listado from "../Listado/Listado";

const Home = ({tareas, setTareas}) => {

    return (
        <Listado tareas={tareas} setTareas={setTareas}/>
    )
}

export default Home;