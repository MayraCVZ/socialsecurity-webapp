import React, { useState } from "react";
import Content from "../../components/Content";
import Formulario from './ExpedientesForm';
import Layout from "../../containers/Layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
const Expedientes = () => {
    return (
        <Layout>
            <Content>
                <div className="divSeparador">
                    <h2>
                        <FontAwesomeIcon icon={faFolderOpen} />
                        &nbsp;EXPEDIENTE DIGITAL
                    </h2>
                </div>
                <Formulario />
            </Content></Layout>
    );
};
export default Expedientes;