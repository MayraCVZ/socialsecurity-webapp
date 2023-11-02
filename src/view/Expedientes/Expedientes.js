import React, { useState } from "react";
import Content from "../../components/Content";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Formulario from './ExpedientesForm';
import Grid from './ExpedientesGrid';
const Expedientes = () => {
    const [datosDelFormulario, setDatosDelFormulario] = useState([]);
    return (
        <Content>
            <h2>EXPEDIENTE DIGITAL</h2>
            <Formulario />
            <Grid datosDelFormulario={datosDelFormulario} />
        </Content>
    );
};
export default Expedientes;