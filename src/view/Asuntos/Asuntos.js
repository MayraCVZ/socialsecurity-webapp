import React from "react";
import Content from "../../components/Content";
import Formulario from './AsuntosForm';
import Layout from "../../containers/Layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime } from "@fortawesome/free-solid-svg-icons";
const Asuntos = () => {
    return (
        <Layout>
            <Content>
                <div className="divSeparador">
                    <h2>
                        <FontAwesomeIcon icon={faBusinessTime} />
                        &nbsp;GESTION DE ASUNTOS
                    </h2>
                </div>
                <Formulario />
            </Content>
        </Layout>
    );
};
export default Asuntos;