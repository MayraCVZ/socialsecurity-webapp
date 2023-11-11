import React, { useState, useEffect } from 'react';
import Content from "../../components/Content";
import ClienteService from "../../services/clienteService";
import AsuntoService from "../../services/asuntoService";
import ExpedienteService from "../../services/expedienteService";
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

function ExpedientesForm() {
    const [idExpediente, setIdExpediente] = useState("");
    const [idAsunto, setIdAsunto] = useState("");
    const [nss, setNss] = useState("");
    const [curp, setCurp] = useState("");
    const [rfc, setRfc] = useState("");
    const [estado, setEstado] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [celular, setCelular] = useState("");
    const [ejercicio, setEjercicio] = useState("");
    const [numExpediente, setNumExpediente] = useState("");
    const [tipoAsunto, setTipoAsunto] = useState("");
    const [clacificacion, setClacificacion] = useState("");
    const [categoria, setCategoria] = useState("");
    const [documento, setDocumento] = useState("");
    const [perteneceA, setPerteneceA] = useState("");
    const [fechaEntrega, setFechaEntrega] = useState("");

    const handleEstado = (event) => {
        setEstado(event.target.value);
    };
    const handleEjercicio = (event) => {
        setEjercicio(event.target.value);
    };
    const handleNumExpediente = (event) => {
        setNumExpediente(event.target.value);
    };
    const handleTipoAsunto = (event) => {
        setTipoAsunto(event.target.value);
    };
    const handleClacificacion = (event) => {
        setClacificacion(event.target.value);
    };
    const handleCategoria = (event) => {
        setCategoria(event.target.value);
    };
    const handleDocumento = (event) => {
        setDocumento(event.target.value);
    };
    const handlePerteneceA = (event) => {
        setPerteneceA(event.target.value);
    };
    const handleFechaEntrega = (event) => {
        setFechaEntrega(event.target.value);
    };

    const handleSubmit = () => {
        let expediente = {
            idAsunto: parseInt(idAsunto),
            documento: documento,
            perteneceA: perteneceA,
            fechaEntrega: new Date(fechaEntrega)
        };
        console.log(expediente);
        if (idExpediente === "") {
            ExpedienteService.createExpediente(expediente);
        } else {
            ExpedienteService.updateExpediente(expediente, idExpediente);
        }
        getData(idAsunto);
    };
    const handleReset = () => {
        document.getElementById("myform").reset();
    };
    const getDataCliente = async () => {
        const { data } = await ClienteService.getClientes();
        const listCliente = document.getElementById("cliente");
        while (listCliente.length > 0) {
            listCliente.remove(0);
        }

        var opt = document.createElement("option");
        opt.value = 0;
        opt.text = '';
        listCliente.appendChild(opt);

        for (var i = 0; i < data.length; i++) {
            var option = document.createElement("option");
            option.value = data[i].idCliente;
            option.text = data[i].nomCliente + ' ' + data[i].apellidoPa + ' ' + data[i].apellidoMa;
            listCliente.appendChild(option);
        }
    };
    const onChangeFunc = async () => {
        var e = document.getElementById("cliente");
        //var text = e.option s[e.selectedIndex].text;
        var { data } = await ClienteService.getClienteById(parseInt(e.value));
        //setIdCliente(e.value);
        setNss(data.nss);
        setCurp(data.curp);
        setRfc(data.rfc);
        setEstado(data.estado);
        setCiudad(data.ciudad);
        setCelular(data.celular);

        data = await AsuntoService.getAsuntos();
        setIdAsunto(data.data[0].idAsunto);

        setEjercicio("");
        setNumExpediente("");
        setTipoAsunto(0);
        setClacificacion(0);
        setCategoria(0);
        getData(0);

        for (var i = 0; i < data.data.length; i++) {
            if (data.data[i].idCliente == e.value) {
                setEjercicio(data.data[i].ejercicio);
                setNumExpediente(data.data[i].numAsunto);
                setTipoAsunto(data.data[i].tipoAsunto);
                setClacificacion(data.data[i].clacificacionAsunto);
                setCategoria(data.data[i].categoriaAsunto);
                getData(data.data[i].idAsunto);
                break;
            }
        }


    };
    const setData = async (id) => {
        const { data } = await ExpedienteService.getExpedienteById(id);
        setIdExpediente(data.idExpediente);
        setFechaEntrega(new Date(data.fechaEntrega).toISOString().slice(0, 10));
        setDocumento(data.documento);
        setPerteneceA(data.perteneceA);
    };
    useEffect(() => {
        getDataCliente();
    }, []);

    /*********************************************************/
    const [expediente, setExpediente] = useState([]);
    const getData = async (id) => {
        const { data } = await ExpedienteService.getExpedienteByIdAsunto(id);
        console.log(data);
        setExpediente(data);
    };
    const DisplayData = expediente.map((info) => {
        return (
            <TableRow
                key={info.idExpediente}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    {info.documento}
                </TableCell>
                <TableCell>{info.perteneceA}</TableCell>
                <TableCell>{info.fechaEntrega}</TableCell>
                <TableCell>
                    <IconButton
                        aria-label="editar"
                        onClick={async () => {
                            await setData(info.idExpediente);
                        }}
                    >
                        <EditIcon color="primary" />

                    </IconButton>
                </TableCell>
                <TableCell>
                    <IconButton
                        aria-label="borrar"
                        onClick={async () => {
                            await ExpedienteService.deleteExpediente(info.idExpediente);
                            await getData(info.idExpediente);
                        }}
                    >
                        <DeleteIcon color="danger" />
                    </IconButton>
                </TableCell>
            </TableRow>
        );
    });
    /******************************************************/

    return (
        <Content>
            <form id="myform">
                <p>
                    <button onClick={handleSubmit}>Guardar</button>&nbsp;
                    <button onClick={handleReset}>Limpiar</button>&nbsp;
                </p>
                <h4>Datos del cliente</h4>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} htmlFor="name">Cliente</label>
                    <select style={{ width: '260px' }} name="cliente" id="cliente" onChange={async () => {
                        await onChangeFunc();
                    }}></select>&nbsp;
                </div>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} htmlFor="name">NSS:</label>
                    <input type="number" name="nss" value={nss} readOnly style={{ width: '250px' }} /*onChange={handleNss}*/ />&nbsp;
                </div>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} htmlFor="name">CURP:</label>
                    <input type="text" name="curp" value={curp} readOnly style={{ width: '250px' }} /*onChange={handleCurp}*/ />&nbsp;
                </div>
                <div >
                    <label style={{ display: 'block' }} htmlFor="name">RFC:</label>
                    <input type="text" name="rfc" value={rfc} readOnly style={{ width: '250px' }}/* onChange={handleRfc}*/ />
                </div>
                <h3 />
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} htmlFor="name">Estado:</label>
                    <select value={estado} onChange={handleEstado} readOnly style={{ width: '260px' }} name="estado" id="estado">
                        <option value="0"></option>
                        <option value="1">Michoacan</option>
                        <option value="2">Jalisco</option>
                        <option value="3">Colima</option>
                        <option value="4">Gerrero</option>
                    </select>&nbsp;
                </div>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} htmlFor="name">Ciudad:</label>
                    <input style={{ width: '250px' }} type="text" name="ciudad" value={ciudad} readOnly/*onChange={handleCiudad}*/ />&nbsp;
                </div>
                <div >
                    <label style={{ display: 'block' }} htmlFor="name">Teléfono:</label>
                    <input style={{ width: '250px' }} type="tel" name="telefono" value={celular} readOnly/*onChange={handleTelefonoCasa}*/ />&nbsp;
                </div>
                <h4>Asunto</h4>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} htmlFor="name">Ejercicio</label>
                    <input type="number" name="ejercicio" min="1990" max="2100" value={ejercicio} onChange={handleEjercicio} style={{ width: '90px' }} /*onChange={handleNomCliente}*/ />&nbsp;
                </div>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} htmlFor="name">Num.Expediente</label>
                    <input type="number" name="numExpediente" value={numExpediente} onChange={handleNumExpediente} style={{ width: '130px' }} /*onChange={handleApellidoPa}*/ />&nbsp;
                </div>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} htmlFor="name">Tipo de asunto</label>
                    <select onChange={handleTipoAsunto} value={tipoAsunto} style={{ width: '258px' }} name="tipoAsunto" id="tipoAsunto" >
                        <option value="0"></option>
                        <option value="P">Pencion</option>
                        <option value="R">Recuperacion de recursos</option>
                    </select>&nbsp;
                </div>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} htmlFor="name">Clasificación</label>
                    <select onChange={handleClacificacion} value={clacificacion} style={{ width: '258px' }} name="clacificacion" id="clacificacion" >
                        <option value="0"></option>
                        <option value="1">IMSS - Ley 73</option>
                        <option value="2">IMSS Ley 97- </option>
                        <option value="3">ISSSTE</option>
                    </select>&nbsp;
                </div>
                <div >
                    <label style={{ display: 'block' }} htmlFor="name">Categoría</label>
                    <select onChange={handleCategoria} value={categoria} style={{ width: '258px' }} name="categoria" id="categoria" >
                        <option value="0"></option>
                        <option value="1">Pensión de Cesantía</option>
                        <option value="2">Pensión de Vejez</option>
                        <option value="3">Pensión de Viudez</option>
                        <option value="4">Pensión de Riesgo de Trabajo</option>
                    </select>
                </div>
                <h3 />
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} htmlFor="name">Documento</label>
                    <input type="text" name="documento" onChange={handleDocumento} value={documento} style={{ width: '250px' }} />&nbsp;
                </div>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} htmlFor="name">Pertenece a</label>
                    <select onChange={handlePerteneceA} value={perteneceA} style={{ width: '258px' }} name="perteneceA" id="perteneceA" >
                        <option value="0"></option>
                        <option value="1">Asegurado</option>
                        <option value="2">Cónyuge</option>
                        <option value="3">Hijos</option>
                    </select>
                </div>
                <div >
                    <label style={{ display: 'block' }} htmlFor="name">Fecha entrega</label>
                    <input type="date" name="fechaEntrega" onChange={handleFechaEntrega} value={fechaEntrega} style={{ width: '250px' }} />&nbsp;
                </div>
            </form>
            <h3>Listado de documentos</h3>
            <div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Documento</TableCell>
                                <TableCell>Pertenece a</TableCell>
                                <TableCell>Fecha de entrega</TableCell>
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
}

export default ExpedientesForm;
