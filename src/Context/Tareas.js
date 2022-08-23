import { createContext, useContext, useState } from "react"

const tareasContext = createContext();

export const useTareas = () => {
    return useContext(tareasContext);
};

const localTareas = localStorage.getItem("tareas")
const arrTareas = localTareas ? JSON.parse(localTareas) : [];

export function TareasProvider ({children}) {

    const [tareas, setTareas] = useState(arrTareas);

    return (
        <tareasContext.Provider value={{tareas, setTareas}}>
            {children}
        </tareasContext.Provider>
    )
};