import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../view/Home";
import Login from "../view/Login";
import Clientes from "../view/Clientes/Clientes";
import ClientesAdd from "../view/Clientes/ClientesAdd";
import Seguimiento from "../view/Seguimiento/Seguimiento";
import SeguimientoAdd from "../view/Seguimiento/SeguimientoAdd";
import Agenda from "../view/Agenda/Agenda";
import Asuntos from "../view/Asuntos/Asuntos";
import Expedientes from "../view/Expedientes/Expedientes";
import "../styles/App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/clientes" element={<Clientes />}></Route>
        <Route path="/clientes-add" element={<ClientesAdd />}></Route>
        <Route path="/seguimiento" element={<Seguimiento />}></Route>
        <Route path="/seguimiento-add" element={<SeguimientoAdd />}></Route>
        <Route path="/agenda" element={<Agenda />}></Route>
        <Route path="/asuntos" element={<Asuntos />}></Route>
        <Route path="/expedientes" element={<Expedientes />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;