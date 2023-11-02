import React, { useState, useEffect } from "react";
import Content from "../../components/Content";
import axios from "axios";
import ClienteService from "../../services/clienteService";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ClienteGrid = () => {
    const [cliente, setCliente] = useState([]);
    // const [id, setId] = useState("");
    const server = 'http://localhost:3000';
    const getData = async () => {
        const { data } = await axios.get('http://localhost:3000/clientes');
        console.log(data);
        setCliente(data);
    };
    useEffect(() => {
        getData();
    }, []);
    const DisplayData = cliente.map((info) => {
        return (
            <TableRow
                key={info.idCliente}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    {info.idCliente}
                </TableCell>
                <TableCell>{info.Nombre}</TableCell>
                <TableCell>{info.apellidoPa}</TableCell>
                <TableCell>
                    <IconButton aria-label="editar">
                        <a href={'clientes-edit/${info.idCliente}'}>
                            <EditIcon color="primary" />
                        </a>
                    </IconButton>
                </TableCell>
                <TableCell>
                    <IconButton
                        aria-label="borrar"
                        onClick={async () => {
                            await ClienteService.deleteCliente(info.idCliente);
                            await getData();
                        }}
                    >
                        <DeleteIcon color="danger" />
                    </IconButton>
                </TableCell>
            </TableRow>
        );
    });
    return (
        <Content>
            <h3>Listado de clientes</h3>
            <div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>No.</TableCell>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Grupo</TableCell>
                                <TableCell>Editar</TableCell>
                                <TableCell>Borrar</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>{DisplayData}</TableBody>
                    </Table>
                </TableContainer>
            </div>
        </Content>
    );
};


export default ClienteGrid;
