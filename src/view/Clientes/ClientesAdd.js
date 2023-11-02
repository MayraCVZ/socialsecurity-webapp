import React, { useState } from "react";
import Content from "../../components/Content";
import axios from "axios";
import {
    FormControl,
    FormLabel,
    InputLabel,
    RadioGroup,
    Radio,
    FormControlLabel,
    TextField,
    MenuItem,
    Select,
    FormGroup,
    Checkbox,
    Button,
} from "@mui/material";
import { Grid } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const ClientesAdd = () => {
    const [nombre, setNombre] = useState("");
    const [grado, setGrado] = useState("");
    const handleCliente = (event) => {
        setNombre(event.target.value);
    };
    const handleGrado = (event) => {
        setGrado(event.target.value);
    };
    const handleSubmit = () => {
        let cliente = {
            nombre: nombre,
            grado: grado,
        };
    };
    return (
        <Content>
            <h1>CAPTURA DE CLIENTES</h1>
            <label>
                Nombre de cliente:
                <input type="text" name="nombre" onChange={handleCliente} />
            </label>
            <label>
                Grupo:
                <input type="text" name="grado" onChange={handleGrado} />
            </label>
            <button onClick={handleSubmit}>Add</button>
        </Content>
    );
};
export default ClientesAdd;