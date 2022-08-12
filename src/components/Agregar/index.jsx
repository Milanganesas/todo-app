import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './index.module.scss'

const Agregar = ({tareas, setTareas}) => {

    const notify = (str) => {
        toast.success(str, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            });
    };

    const fecha = new Date();

    const nuevaTarea = (e) => {
        e.preventDefault();

        const titulo = e.target.titulo.value;
        const descripcion = e.target.descripcion.value;

        const tarea = {
            titulo,
            descripcion,
            fecha_creacion: fecha.toLocaleString(),
        };

        const crear = () => {
            setTareas([...tareas, tarea]);
            e.target.titulo.value = "";
            e.target.descripcion.value = "";
            notify("Listo, quedo cargada!");
        }

        !titulo ? 
        notify("Necesita titulo") :
        !descripcion ? 
        notify("Necesita descripcion") :
        crear()
        
    };

    return (
            <div className={styles.container}>
                <form className={styles.container_form} onSubmit={nuevaTarea}>
                <h2>Nuevas tareas</h2>
                    <div className={styles.container_form_effect}>
                        <input type="text" name="titulo" minLength="4" required autoComplete="off"></input>
                        <label htmlFor="titulo" className={styles.container_form_effect_label}>
                            <span className={styles.container_form_effect_content}>Titulo</span>
                        </label>
                    </div>
                    <div className={styles.container_form_effect}>
                        <input type="text" name="descripcion" minLength="5" required autoComplete="off"></input>
                        <label htmlFor="descripcion" className={styles.container_form_effect_label}>
                            <span className={styles.container_form_effect_content}>Descripcion</ span>
                        </label>
                    </div>
                    <div>
                        <button type="submit">Enviar</button>
                        <ToastContainer />
                    </div>
                </form>
            </div>
    );
};

export default Agregar;