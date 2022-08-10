import { useState } from "react";

const Listado = ({tareas, setTareas}) => {

    const [ seleccion, setSeleccion ] = useState()

    const filter = (e) => {
        setSeleccion(tareas.filter( t => t.titulo === e.target.innerText))
    }

    const reset = () => {
        setSeleccion([])
    }

    const hDelete = (e) => {
        setTareas(tareas.filter(t => t.fecha_creacion !== e.target.parentElement.id))
    }

    return (
        <div>
            <h1>Mis Tareas</h1>
            {tareas.map(t => {
                return (
                    <div key={t.fecha_creacion} id={t.fecha_creacion}>
                            <button onClick={filter}>{t.titulo}</button>
                            <p>{t.fecha_creacion}</p>
                        <button onClick={hDelete}>Borrar</button>
                    </div>
                )}
            )}
            <div>
                {!seleccion ?
                <></> :
                seleccion.map(s =>{
                    return (
                        <div key={s.fecha_creacion}>
                            <h2>{s.titulo}</h2>
                            <p>{s.descripcion}</p>
                            <p>{s.fecha_creacion}</p>
                            <button onClick={reset}>Cerrar</button> 
                        </div>
                    )}
                )}
            </div>
        </div>
    )
};

export default Listado;