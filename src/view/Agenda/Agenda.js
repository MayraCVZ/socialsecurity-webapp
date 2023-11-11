import React, { useState } from "react";
import Content from "../../components/Content";
import Formulario from './AgendaForm';
import Layout from "../../containers/Layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faCalendar, faCalendarCheck, faCalendarDays, faCalendarTimes, faCalendarWeek, faTimeline } from "@fortawesome/free-solid-svg-icons";
const Materias = () => {
    return (
        <Layout>
            <Content>
                <div className="divSeparador">
                    <h2>
                        <FontAwesomeIcon icon={faCalendarDays} />
                        &nbsp; AGENDA DIGITAL</h2>
                </div>
                <Formulario />
            </Content>
        </Layout>
    );
};
export default Materias;