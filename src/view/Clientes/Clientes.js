import React, { useState } from "react";
import Content from "../../components/Content";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import GroupIcon from "@mui/icons-material/Group";
import Formulario from './ClienteForm';
import Grid from './ClienteGrid';
const Clientes = () => {

    const [datosDelFormulario, setDatosDelFormulario] = useState([]);
    return (
        <Content>
            <h2>REGISTRO DE CLIENTES</h2>
            <Formulario />
            <Grid datosDelFormulario={datosDelFormulario} />
        </Content>
    );
};
export default Clientes; 