import { Switch, Route } from "react-router-dom";

import Nav from "./Components/Nav"
import Home from "./Pages/Home"
import Footer from "./Components/Footer"
import { TareasProvider } from "./Context/Tareas";

function App() {

  return (
    <> 
    <TareasProvider> 
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </TareasProvider>
    </>
  );
};

export default App;
