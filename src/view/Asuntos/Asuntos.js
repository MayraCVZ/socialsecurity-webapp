import React from "react";
import Content from "../../components/Content";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Formulario from './AsuntosForm';
const Asuntos = () => {
    return (
        <Content>
            <h2>GESTION DE ASUNTOS</h2>
            <Formulario />
        </Content>
    );
};
export default Asuntos;