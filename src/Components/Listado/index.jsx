import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useTareas } from "../../Context/Tareas";

import Agregar from "../Agregar"

import styles from './index.module.scss'

const Listado = () => {

    useEffect(() => {
        const localTareas = localStorage.getItem("tareas");
        localTareas ? console.log("Recuperando") : 
        localStorage.setItem("tareas", JSON.stringify([]))
    }, [])

    const [ seleccion, setSeleccion ] = useState();

    const { tareas, setTareas } = useTareas();

    const filtrado = (e) => {
        setSeleccion(tareas.filter(t => t.titulo === e.target.innerText));
    };

    const hDelete = (e) => {
        setTareas(tareas.filter(t => t.fecha_creacion !== e.target.parentElement.id));
    };

    return (  
        <div className={styles.container}>
            <div className={styles.container_lista}>
                <h1>Mis Tareas</h1>
                {tareas.map(t => {
                    return (
                        <div className={styles.container_lista_toDo} key={t.fecha_creacion} id={t.fecha_creacion}>
                                <div>
                                    <button className={styles.pointer} onClick={filtrado}>{t.titulo}</button>
                                    <p>{t.fecha_creacion}</p>
                                </div>
                            <button className={styles.delete} onClick={hDelete}>{<AiOutlineDelete size="25px"/>}</button>
                        </div>
                    )}
                )}
            </div>
            <div className={styles.container_segundo}>
                <div className={styles.container_segundo_seleccion}>
                    {!seleccion ?
                    <div></div> :
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
                <Agregar />
            </div>
        </div>
    )
};

export default Listado;