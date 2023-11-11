import React, { useState } from "react";
import Content from "../../components/Content";
import Formulario from './SeguimientoForm';
import Layout from "../../containers/Layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
const Seguimiento = () => {
    return (
        <Layout>
            <Content>
                <div className="divSeparador">
                    <h2>
                        <FontAwesomeIcon icon={faListCheck} />
                        &nbsp; SEGUIMIENTO AL ASUNTO
                    </h2>
                </div>
                <Formulario />
            </Content>
        </Layout>
    );
};
export default Seguimiento;