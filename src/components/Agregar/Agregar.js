const Agregar = ({tareas, setTareas}) => {

    const fecha = new Date();

    const nuevaTarea = (e) => {
        e.preventDefault();

        const tarea = {
            titulo: e.target.titulo.value,
            descripcion: e.target.descripcion.value,
            fecha_creacion: fecha.toLocaleString(),
        };

        setTareas([...tareas, tarea]);

        e.target.titulo.value = "";
        e.target.descripcion.value = "";

        alert("Listo master, quedo cargada!");
    };

    return (
            <div>
                <h2>Nuevas tareas</h2>
                <form onSubmit={nuevaTarea}>
                    <div>
                        <input type="text" name="titulo" minLength="4"></input>
                        <label>Titulo</label>
                    </div>
                    <div>
                        <input type="text" name="descripcion" minLength="5"></input>
                        <label>Descripcion</label>
                    </div>
                    <div>
                        <input type="submit"></input>
                    </div>
                </form>
            </div>
    );
};

export default Agregar;