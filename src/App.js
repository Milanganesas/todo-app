import { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Nav from "./components/Nav"
import Home from "./components/Home"
import Agregar from "./components/Agregar"
import Footer from "./components/Footer"

function App() {

  const [ tareas, setTareas ] = useState([
    {
        titulo: 'Sacar a pasear al perro.',
        descripcion: 'Dar una vuelta a la manzana con el perro.',
        fecha_creacion: '26/10/2022, 22:00:00',
    },
    {
        titulo: 'Lavar los platos.',
        descripcion: 'Recordar usar esponja y detergente.',
        fecha_creacion: '26/09/2022, 10:00:00',
    },
    {
        titulo: 'Llamar a la empresa de internet.',
        descripcion: 'Pedir descuentos y amenazar con dar de baja el servicio.',
        fecha_creacion: '28/04/2022, 09:00:00',
    },
    {
        titulo: 'Comprar alimento de tortuga.',
        descripcion: 'Manuelita se esta quedando sin alimento :(',
        fecha_creacion: '22/07/2022, 12:00:00',
    },
  ])


  return (
    <>   
      <Nav />
      <Switch>
        <Route exact path="/" render={(props) => <Home tareas={tareas} setTareas={setTareas} {...props}/>} />
        <Route path="/agregar" render={(props) => <Agregar tareas={tareas} setTareas={setTareas} {...props}/>} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
