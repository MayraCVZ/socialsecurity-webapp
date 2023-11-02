import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../view/Home";
import Clientes from "../view/Clientes/Clientes";
import ClientesAdd from "../view/Clientes/ClientesAdd";
import Seguimiento from "../view/Seguimiento/Seguimiento";
import SeguimientoAdd from "../view/Seguimiento/SeguimientoAdd";
import Agenda from "../view/Agenda/Agenda";
import AgendaAdd from "../view/Agenda/AgendaAdd";
import Asuntos from "../view/Asuntos/Asuntos";
import AsuntosAdd from "../view/Asuntos/AsuntosAdd";
import Expedientes from "../view/Expedientes/Expedientes";
import ExpedientesAdd from "../view/Expedientes/ExpedientesAdd";
import Layout from "../containers/Layout";
import "../styles/App.css";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/clientes" element={<Clientes />}></Route>
          <Route path="/clientes-add" element={<ClientesAdd />}></Route>
          <Route path="/seguimiento" element={<Seguimiento />}></Route>
          <Route path="/seguimiento-add" element={<SeguimientoAdd />}></Route>
          <Route path="/agenda" element={<Agenda />}></Route>
          <Route path="/agenda-add" element={<AgendaAdd />}></Route>
          <Route path="/asuntos" element={<Asuntos />}></Route>
          <Route path="/asuntos-add" element={<AsuntosAdd />}></Route>
          <Route path="/expedientes" element={<Expedientes />}></Route>
          <Route path="/expedientes-add" element={<ExpedientesAdd />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default App;