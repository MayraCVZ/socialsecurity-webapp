import React, { useState, useEffect } from 'react';
import ClienteService from "../../services/clienteService";
import AsuntoService from "../../services/asuntoService";
import axios from "axios";

const AsuntosForm = () => {
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
    const [fechaInicio, setFechaInicio] = useState("");
    const [estatus, setEstatus] = useState("");

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
    const handleFechaInicio = (event) => {
        setFechaInicio(event.target.value);
    };
    const handleEstatus = (event) => {
        setEstatus(event.target.value);
    };
    const handleSubmit = () => {
        let asunto = {
            idCliente: parseInt(idCliente),
            ejercicio: parseInt(ejercicio),
            numAsunto: parseInt(numExpediente),
            tipoAsunto: tipoAsunto,
            clacificacionAsunto: clacificacion,
            categoriaAsunto: categoria,
            fechaInicio: new Date(fechaInicio),
            estatus: estatus
        };
        // const { data } = await axios.post(`${server}/clientes`, cliente);
        console.log(asunto);
        if (idAsunto === "") {
            AsuntoService.createAsunto(asunto);
        } else {
            AsuntoService.updateAsunto(asunto, idAsunto);
        }
    };
    const handleReset = () => {
        document.getElementById("myform").reset();
    };
    const getDataCliente = async () => {
        const { data } = await ClienteService.getClientes();//await axios.get('http://localhost:3000/clientes');
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
        setIdCliente(e.value);
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
        setFechaInicio(new Date());
        setEstatus(0);

        for (var i = 0; i < data.data.length; i++) {
            if (data.data[i].idCliente == e.value) {
                setEjercicio(data.data[i].ejercicio);
                setNumExpediente(data.data[i].numAsunto);
                setTipoAsunto(data.data[i].tipoAsunto);
                setClacificacion(data.data[i].clacificacionAsunto);
                setCategoria(data.data[i].categoriaAsunto);
                setFechaInicio(new Date(data.data[i].fechaInicio).toISOString().slice(0, 10));
                setEstatus(data.data[i].estatus);
                break;
            }
        }
    };
    useEffect(() => {
        getDataCliente();
    }, []);

    return (
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
                <input type="number" name="ejercicio" min="1990" max="2100" value={ejercicio} onChange={handleEjercicio} style={{ width: '90px' }} />&nbsp;
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
            <div style={{ float: 'left', marginRight: '20px' }}>
                <label style={{ display: 'block' }} htmlFor="name">Fecha inicio</label>
                <input type="date" name="fechaInicio" onChange={handleFechaInicio} value={fechaInicio} style={{ width: '250px' }} /*onChange={handleLugarNac}*/ />&nbsp;
            </div>
            <div style={{ float: 'left', marginRight: '20px' }}>
                <label style={{ display: 'block' }} htmlFor="name">Estatus</label>
                <select onChange={handleEstatus} value={estatus} name="estatus" id="estatus" >
                    <option value="0"></option>
                    <option value="A">Activo</option>
                    <option value="I">Inactivo</option>
                    <option value="C">Cancelado</option>
                    <option value="F">Finalizar</option>
                </select>&nbsp;
            </div>
        </form>
    );
}

export default AsuntosForm;
