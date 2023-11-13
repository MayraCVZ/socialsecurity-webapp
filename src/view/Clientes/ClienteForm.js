import React, { useState, useEffect } from 'react';
import ClienteService from "../../services/clienteService";
import Content from "../../components/Content";
import axios from "axios";

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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

//function ClienteForm() {
const ClienteForm = () => {
    const [idCliente, setIdCliente] = useState("");
    const [nomCliente, setNomCliente] = useState("");
    const [apellidoPa, setApellidoPa] = useState("");
    const [apellidoMa, setApellidoMa] = useState("");
    const [fechaRegistro, setFechaRegistro] = useState("");
    const [fechaNac, setFechaNac] = useState("");
    const [lugarNac, setLugarNac] = useState("");
    const [estadoCivil, setEstadoCivil] = useState("");
    const [nss, setNss] = useState("");
    const [curp, setCurp] = useState("");
    const [rfc, setRfc] = useState("");
    const [estado, setEstado] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [colonia, setColonia] = useState("");
    const [codigoPostal, setCodigoPostal] = useState("");
    const [calle, setCalle] = useState("");
    const [numero, setNumero] = useState("");
    const [telefonoCasa, setTelefonoCasa] = useState("");
    const [celular, setCelular] = useState("");
    const [email, setEmail] = useState("");
    const [optFiltro, setOptFiltro] = useState("");
    const [filtro, setFiltro] = useState("");

    const handleNomCliente = (event) => {
        setNomCliente(event.target.value);
    };
    const handleApellidoPa = (event) => {
        setApellidoPa(event.target.value);
    };
    const handleApellidoMa = (event) => {
        setApellidoMa(event.target.value);
    };
    const handleFechaRegistro = (event) => {
        setFechaRegistro(event.target.value);
    };
    const handleFechaNac = (event) => {
        setFechaNac(event.target.value);
    };
    const handleLugarNac = (event) => {
        setLugarNac(event.target.value);
    };
    const handleEstadoCivil = (event) => {
        setEstadoCivil(event.target.value);
    };
    const handleNss = (event) => {
        setNss(event.target.value);
    };
    const handleCurp = (event) => {
        setCurp(event.target.value);
    };
    const handleRfc = (event) => {
        setRfc(event.target.value);
    };
    const handleEstado = (event) => {
        setEstado(event.target.value);
    };
    const handleCiudad = (event) => {
        setCiudad(event.target.value);
    };
    const handleColonia = (event) => {
        setColonia(event.target.value);
    };
    const handleCodigoPostal = (event) => {
        setCodigoPostal(event.target.value);
    };
    const handleCalle = (event) => {
        setCalle(event.target.value);
    };
    const handleNumero = (event) => {
        setNumero(event.target.value);
    };
    const handleTelefonoCasa = (event) => {
        setTelefonoCasa(event.target.value);
    };
    const handleCelular = (event) => {
        setCelular(event.target.value);
    };
    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleOptFiltro = (event) => {
        setOptFiltro(event.target.value);
        setFiltro("");
    };
    const handleFiltro = (event) => {
        setFiltro(event.target.value);
    };
    const handleSubmit = () => {
        let cliente = {
            nomCliente: nomCliente,
            apellidoPa: apellidoPa,
            apellidoMa: apellidoMa,
            fechaRegistro: new Date(fechaRegistro),
            fechaNac: new Date(fechaNac),
            lugarNac: lugarNac,
            estadoCivil: estadoCivil,
            nss: parseInt(nss),
            curp: curp,
            rfc: rfc,
            estado: estado,
            ciudad: ciudad,
            colonia: colonia,
            codigoPostal: codigoPostal,
            calle: calle,
            numero: numero,
            telefonoCasa: telefonoCasa,
            celular: celular,
            email: email
        };
        // const { data } = await axios.post(`${server}/clientes`, cliente);
        console.log(cliente);
        if (idCliente === "") {
            ClienteService.createCliente(cliente);
        } else {
            ClienteService.updateCliente(cliente, idCliente);
        }
    };
    const handleReset = () => {
        document.getElementById("myform").reset();
    };
    const setData = async (id) => {
        const { data } = await axios.get('http://localhost:3000/clientes/' + id);
        console.log(data);
        setIdCliente(id);
        setNomCliente(data.nomCliente);
        setApellidoPa(data.apellidoPa);
        setApellidoMa(data.apellidoMa);
        setFechaRegistro(new Date(data.fechaRegistro).toISOString().slice(0, 10));
        setFechaNac(new Date(data.fechaNac).toISOString().slice(0, 10));
        setLugarNac(data.lugarNac);
        setEstadoCivil(data.estadoCivil);
        setNss(data.nss);
        setCurp(data.curp);
        setRfc(data.rfc);
        setEstado(data.estado);
        setCiudad(data.ciudad);
        setColonia(data.colonia);
        setCodigoPostal(data.codigoPostal);
        setCalle(data.calle);
        setNumero(data.numero);
        setTelefonoCasa(data.telefonoCasa);
        setCelular(data.celular);
        setEmail(data.email);
    };

    /*****************************/
    const [cliente, setCliente] = useState([]);
    const getData = async () => {
        if (optFiltro === "1") {
            const { data } = await axios.get('http://localhost:3000/clientes/nss/' + filtro);
            setCliente(data);
        } else if (optFiltro === "2") {
            const { data } = await axios.get('http://localhost:3000/clientes/curp/' + filtro);
            setCliente(data);
        }
        else {
            const { data } = await axios.get('http://localhost:3000/clientes');
            setCliente(data);
        }
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
                <TableCell>{info.nomCliente + ' ' + info.apellidoPa + ' ' + info.apellidoMa}</TableCell>
                <TableCell>{info.telefonoCasa}</TableCell>
                <TableCell>{info.nss}</TableCell>
                <TableCell>{info.curp}</TableCell>
                <TableCell>
                    <IconButton
                        aria-label="editar"
                        onClick={async () => {
                            await setData(info.idCliente);
                        }}
                    >
                        <EditIcon color="primary" />

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
    /*****************************/
    return (
        <Content>
            <form id="myform">
                <p>
                    <button onClick={handleSubmit}>Guardar</button>&nbsp;
                    <button onClick={handleReset}>Limpiar</button>&nbsp;
                </p>
                <h4>Información general</h4>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} htmlFor="name">Nombre</label>
                    <input type="text" name="nombre" size="30" value={nomCliente}
                        style={{ width: '250px' }} onChange={handleNomCliente} />&nbsp;
                </div>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} htmlFor="name">Apellido paterno</label>
                    <input type="text" name="apellidoP" size="30" value={apellidoPa}
                        style={{ width: '250px' }} onChange={handleApellidoPa} />&nbsp;
                </div>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} htmlFor="name">Apellido materno</label>
                    <input type="text" name="apellidoA" size="30" value={apellidoMa}
                        style={{ width: '250px' }} onChange={handleApellidoMa} />&nbsp;
                </div>
                <div >
                    <label style={{ display: 'block' }} htmlFor="name">Fecha registro</label>
                    <input type="date" name="fechaRegistro" size="40" value={fechaRegistro}
                        style={{ width: '250px' }} onChange={handleFechaRegistro} />
                </div>
                <h3 />
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} htmlFor="name">Fecha nacimiento:</label>
                    <input type="date" name="fechaNacimiento" size="30" value={fechaNac}
                        style={{ width: '250px' }} onChange={handleFechaNac} />&nbsp;
                </div>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} htmlFor="name">Lugar nacimiento:</label>
                    <input type="text" name="lugarNacimiento" size="30" value={lugarNac}
                        style={{ width: '250px' }} onChange={handleLugarNac} />&nbsp;
                </div>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} htmlFor="name">Estado civil:</label>
                    <select value={estadoCivil} onChange={handleEstadoCivil} style={{ width: '260px' }} name="estadoCivil" id="estadoCivil" >
                        <option value="0"></option>
                        <option value="S">Soltero</option>
                        <option value="C">Casado</option>
                        <option value="D">Divorciado</option>
                        <option value="V">Viudo</option>
                    </select>&nbsp;
                </div>
                <div>
                    <label style={{ display: 'block' }} htmlFor="name">Edad:</label>
                    <input type="number" name="edad" size="30" min="50" max="200"
                        style={{ width: '100px' }} />
                </div>
                <h3 />
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} htmlFor="name">NSS:</label>
                    <input type="number" name="nss" size="40" value={nss}
                        style={{ width: '250px' }} onChange={handleNss} />&nbsp;
                </div>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} htmlFor="name">CURP:</label>
                    <input type="text" name="curp" size="30" value={curp}
                        style={{ width: '250px' }} onChange={handleCurp} />&nbsp;
                </div>
                <div >
                    <label style={{ display: 'block' }} htmlFor="name">RFC:</label>
                    <input type="text" name="rfc" size="30" value={rfc}
                        style={{ width: '250px' }} onChange={handleRfc} />
                </div>
                <h4>Dirección</h4>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} htmlFor="name">Estado:</label>
                    <select value={estado} onChange={handleEstado} style={{ width: '260px' }} name="estado" id="estado">
                        <option value="0"></option>
                        <option value="1">Michoacan</option>
                        <option value="2">Jalisco</option>
                        <option value="3">Colima</option>
                        <option value="4">Gerrero</option>
                    </select>&nbsp;
                </div>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} htmlFor="name">Ciudad:</label>
                    <input type="text" name="ciudad" size="30" value={ciudad}
                        style={{ width: '250px' }} onChange={handleCiudad} />&nbsp;
                </div>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} htmlFor="name">Colonia:</label>
                    <input type="text" name="colonia" size="30" value={colonia}
                        style={{ width: '250px' }} onChange={handleColonia} />&nbsp;
                </div>
                <div >
                    <label style={{ display: 'block' }} htmlFor="name">Código postal:</label>
                    <input type="text" name="cp" size="20" value={codigoPostal}
                        style={{ width: '250px' }} onChange={handleCodigoPostal} />
                </div>
                <h3 />
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} htmlFor="name">Calle:</label>
                    <input type="text" name="calle" size="30" value={calle}
                        style={{ width: '250px' }} onChange={handleCalle} />&nbsp;
                </div>
                <div >
                    <label style={{ display: 'block' }} htmlFor="name">Numero:</label>
                    <input type="number" name="numero" size="20" min="1" value={numero}
                        style={{ width: '250px' }} onChange={handleNumero} />
                </div>
                <h4>Datos de contacto</h4>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} htmlFor="name">Teléfono Casa:</label>
                    <input type="tel" name="telefono" size="30" value={telefonoCasa}
                        style={{ width: '250px' }} onChange={handleTelefonoCasa} />&nbsp;
                </div>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} htmlFor="name">Teléfono Celular :</label>
                    <input type="tel" name="celular" size="30" value={celular}
                        style={{ width: '250px' }} onChange={handleCelular} />&nbsp;
                </div>
                <div >
                    <label style={{ display: 'block' }} htmlFor="name">Email:</label>
                    <input type="email" name="email" size="30" value={email}
                        style={{ width: '250px' }} onChange={handleEmail} />
                </div >
            </form>
            <h3>Listado de clientes</h3>
            <div style={{ float: 'right', marginRight: '20px' }}>
                <select value={optFiltro} onChange={handleOptFiltro} style={{ width: '100px' }} name="optFiltro" id="optFiltro" >
                    <option value="0"></option>
                    <option value="1">NSS</option>
                    <option value="2">CURP</option>
                </select>&nbsp;
                <input type="text" name="filtro" size="30" value={filtro} style={{ width: '250px' }} onChange={handleFiltro} />&nbsp;
                <button onClick={getData}><FontAwesomeIcon icon={faSearch} /></button>&nbsp;
            </div>
            <div >
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>No.</TableCell>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Telefono</TableCell>
                                <TableCell>NSS</TableCell>
                                <TableCell>CURP</TableCell>
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
export default ClienteForm;
