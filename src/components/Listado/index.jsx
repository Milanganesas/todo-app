import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

import styles from './index.module.scss'

const Listado = ({tareas, setTareas}) => {

    const [ seleccion, setSeleccion ] = useState();

    const filter = (e) => {
        setSeleccion(tareas.filter( t => t.titulo === e.target.innerText))
    };

    const hDelete = (e) => {
        setTareas(tareas.filter(t => t.fecha_creacion !== e.target.parentElement.id))
    };

    return (
        <div className={styles.container}>
            <div className={styles.container_list}>
                <h1>Mis Tareas</h1>
                {tareas.map(t => {
                    return (
                        <div className={styles.container_list_toDo} key={t.fecha_creacion} id={t.fecha_creacion}>
                                <div>
                                    <button className={styles.pointer} onClick={filter}>{t.titulo}</button>
                                    <p>{t.fecha_creacion}</p>
                                </div>
                            <button className={styles.delete} onClick={hDelete}>{<AiOutlineDelete size="25px"/>}</button>
                        </div>
                    )}
                )}
            </div>
            <div className={styles.container_select}>
                {!seleccion ?
                <div className={styles.container_select_none}></div> :
                seleccion.map(s =>{
                    return (
                        <div key={s.fecha_creacion}>
                            <h2>{s.titulo}</h2>
                            <p>{s.fecha_creacion}</p>
                            <p>{s.descripcion}</p>
                        </div>
                    )}
                )}
            </div>
        </div>
    )
};

export default Listado;