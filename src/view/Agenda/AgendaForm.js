import React, { useState, useEffect } from 'react';
import Content from "../../components/Content";
import ClienteService from "../../services/clienteService";
import AsuntoService from "../../services/asuntoService";
import AgendaService from "../../services/agendaService";
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

function AgendaForm() {
    const [idAgenda, setIdAgenda] = useState("");
    const [idAsunto, setIdAsunto] = useState("");
    const [idCliente, setIdCliente] = useState("");
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
    const [comentarios, setComentarios] = useState("");
    const [horaIni, setHoraIni] = useState("");
    const [tipoCita, setTipoCita] = useState("");
    const [fecha, setFecha] = useState("");

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
    const handleComentarios = (event) => {
        setComentarios(event.target.value);
    };
    const handleHoraIni = (event) => {
        setHoraIni(event.target.value);
    };
    const handleTipoCita = (event) => {
        setTipoCita(event.target.value);
    };
    const handleFecha = (event) => {
        setFecha(event.target.value);
    };

    const handleSubmit = () => {
        let valoresAgenda = {
            idAsunto: parseInt(idAsunto),
            comentarios: comentarios,
            hora: horaIni,
            tipoCita: tipoCita,
            fecha: new Date(fecha)
        };
        console.log(valoresAgenda);
        if (idAgenda === "") {
            AgendaService.createAgenda(valoresAgenda);
        } else {
            AgendaService.updateAgenda(valoresAgenda, idAgenda);
        }
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
        setNss(data.nss);
        setCurp(data.curp);
        setRfc(data.rfc);
        setEstado(data.estado);
        setCiudad(data.ciudad);
        setCelular(data.celular);

        setIdAsunto("");
        setEjercicio("");
        setNumExpediente("");
        setTipoAsunto(0);
        setClacificacion(0);
        setCategoria(0);
        getData(0);

        data = await AsuntoService.getAsuntos();
        setIdAsunto(data.data[0].idAsunto);

        for (var i = 0; i < data.data.length; i++) {
            if (data.data[i].idCliente == e.value) {
                setIdAsunto(data.data[i].idAsunto);
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
        const { data } = await AgendaService.getAgendaById(id);
        setIdAgenda(data.idAgenda);
        setFecha(new Date(data.fecha).toISOString().slice(0, 10));
        setComentarios(data.comentarios);
        setHoraIni(data.hora);
        setTipoCita(data.tipoCita);
    };
    useEffect(() => {
        getDataCliente();
    }, []);
    /*********************************************************/
    const [dataAgenda, setDataAgenda] = useState([]);
    const getData = async (id) => {
        const { data } = await AgendaService.getAgendaByIdAsunto(id);
        console.log(data);
        setDataAgenda(data);
    };
    const DisplayData = dataAgenda.map((info) => {
        return (
            <TableRow
                key={info.idAgenda}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
                <TableCell component="th" scope="row">{info.tipoCita}
                </TableCell>
                <TableCell>{info.hora}</TableCell>
                <TableCell>{new Date(info.fecha).toISOString().slice(0, 10)}</TableCell>
                <TableCell>{info.comentarios}</TableCell>
                <TableCell>
                    <IconButton
                        aria-label="editar"
                        onClick={async () => {
                            await setData(info.idAgenda);
                        }}
                    >
                        <EditIcon color="primary" />

                    </IconButton>
                </TableCell>
                <TableCell>
                    <IconButton
                        aria-label="borrar"
                        onClick={async () => {
                            await AgendaService.deleteAgenda(info.idAgenda);
                            await getData(info.idAsunto);
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
                    <input type="number" name="nss" value={nss} readOnly style={{ width: '250px' }} />&nbsp;
                </div>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} htmlFor="name">CURP:</label>
                    <input type="text" name="curp" value={curp} readOnly style={{ width: '250px' }} />&nbsp;
                </div>
                <div >
                    <label style={{ display: 'block' }} htmlFor="name">RFC:</label>
                    <input type="text" name="rfc" value={rfc} readOnly style={{ width: '250px' }} />
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
                    <input style={{ width: '250px' }} type="text" name="ciudad" value={ciudad} readOnly />&nbsp;
                </div>
                <div >
                    <label style={{ display: 'block' }} htmlFor="name">Teléfono:</label>
                    <input style={{ width: '250px' }} type="tel" name="telefono" value={celular} readOnly />&nbsp;
                </div>
                <h4>Asunto</h4>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} htmlFor="name">Ejercicio</label>
                    <input type="number" name="ejercicio" min="1990" max="2100" value={ejercicio} onChange={handleEjercicio} style={{ width: '90px' }} /*onChange={handleNomCliente}*/ />&nbsp;
                </div>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} htmlFor="name">Num.Expediente</label>
                    <input type="number" name="numExpediente" value={numExpediente} onChange={handleNumExpediente} style={{ width: '130px' }} />&nbsp;
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
                <div style={{ float: 'left', marginRight: '30px' }}>
                    <label style={{ display: 'block' }} htmlFor="name">Tipo de cita</label>
                    <select onChange={handleTipoCita} value={tipoCita} style={{ width: '260px' }} name="tipoCita" id="tipoCita" >
                        <option value="0"></option>
                        <option value="1">Firma de Poder Notarial.</option>
                        <option value="2">Cobro de Gastos</option>
                        <option value="3">Recepción de documentos solicitados.</option>
                        <option value="4">Diagnostico juridico pensionario.</option>
                    </select>
                </div>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} htmlFor="name">Fecha</label>
                    <input type="date" name="fecha" size="30" onChange={handleFecha} value={fecha} style={{ width: '110px' }} />&nbsp;
                </div>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} htmlFor="name">Hora inicio</label>
                    <input type="time" name="horaIni" size="30" onChange={handleHoraIni} value={horaIni} style={{ width: '110px' }} />&nbsp;
                </div>
                <div >
                    <label style={{ display: 'block' }} htmlFor="name">Comentarios</label>
                    <input type="text" name="comentarios" size="30" onChange={handleComentarios} value={comentarios} style={{ width: '500px' }} />&nbsp;
                </div>
            </form><h3>Listado de citas</h3>
            <div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Tipo de de cita</TableCell>
                                <TableCell>Fecha</TableCell>
                                <TableCell>Hora Inicio</TableCell>
                                <TableCell>Comentarios</TableCell>
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

export default AgendaForm;
