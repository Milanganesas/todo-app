import styles from './index.module.scss'

const Agregar = ({tareas, setTareas}) => {

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
            alert("Listo master, quedo cargada!");
        }

        !titulo ? 
        alert("Te falta el titulo champion!") :
        !descripcion ? 
        alert("Describila un poquito") :
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
                    </div>
                </form>
            </div>
    );
};

export default Agregar;