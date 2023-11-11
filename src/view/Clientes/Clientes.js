import React, { useState } from "react";
import Content from "../../components/Content";
import Formulario from './ClienteForm';
import Grid from './ClienteGrid';
import Layout from "../../containers/Layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
const Clientes = () => {
    //const [datosDelFormulario, setDatosDelFormulario] = useState([]);
    return (
        <Layout>
            <Content>
                <div className="divSeparador">
                    <h2>
                        <FontAwesomeIcon icon={faAddressCard} />
                        &nbsp;REGISTRO DE CLIENTES</h2>
                </div>
                <Formulario />
                {/*<Grid datosDelFormulario={datosDelFormulario} />*/}
            </Content>
        </Layout>
    );
};
export default Clientes; 