import React, { useState } from 'react';
import ClienteService from "../../services/clienteService";

//function ClienteForm() {
const ClienteForm = () => {
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
    const handleSubmit = () => {
        let cliente = {
            nomCliente: nomCliente,
            apellidoPa: apellidoPa,
            apellidoMa: apellidoMa,
            fechaRegistro: fechaRegistro,
            fechaNac: fechaNac,
            lugarNac: lugarNac,
            estadoCivil: estadoCivil,
            nss: nss,
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
        ClienteService.createCliente(cliente);
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <input type="submit" value="Guardar" />&nbsp;
                <input type="submit" value="Borrar" />&nbsp;
                <input type="reset" value="Limpiar" />&nbsp;
            </p>
            <h4>Información general</h4>
            <div style={{ borderColor: 'red' }}></div>
            <p >
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} for="name">Nombre</label>
                    <input type="text" name="nombre" size="30" style={{ width: '250px' }} onChange={handleNomCliente} />&nbsp;
                </div>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} for="name">Apellido paterno</label>
                    <input type="text" name="apellidoP" size="30" style={{ width: '250px' }} onChange={handleApellidoPa} />&nbsp;
                </div>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} for="name">Apellido materno</label>
                    <input type="text" name="apellidoA" size="30" style={{ width: '250px' }} onChange={handleApellidoMa} />&nbsp;
                </div>
                <div >
                    <label style={{ display: 'block' }} for="name">Fecha registro</label>
                    <input type="date" name="fechaRegistro" size="40" style={{ width: '250px' }} onChange={handleFechaRegistro} />
                </div>
            </p>
            <p>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} for="name">Fecha nacimiento:</label>
                    <input type="tedatext" name="fechaNacimiento" size="30" style={{ width: '250px' }} onChange={handleFechaNac} />&nbsp;
                </div>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} for="name">Lugar nacimiento:</label>
                    <input type="text" name="lugarNacimiento" size="30" style={{ width: '250px' }} onChange={handleLugarNac} />&nbsp;
                </div>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} for="name">Estado civil:</label>
                    <select style={{ width: '260px' }} name="estadoCivil" id="estadoCivil" >
                        <option value="0"></option>
                        <option value="S">Soltero</option>
                        <option value="C">Casado</option>
                        <option value="D">Divorciado</option>
                        <option value="V">Viudo</option>
                    </select>&nbsp;
                </div>
                <div>
                    <label style={{ display: 'block' }} for="name">Edad:</label>
                    <input type="number" name="edad" size="30" min="50" max="200" />
                </div>
            </p>
            <p>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} for="name">NSS:</label>
                    <input type="number" name="nss" size="40" style={{ width: '250px' }} onChange={handleNss} />&nbsp;
                </div>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} for="name">CURP:</label>
                    <input type="text" name="curp" size="30" style={{ width: '250px' }} onChange={handleCurp} />&nbsp;
                </div>
                <div >
                    <label style={{ display: 'block' }} for="name">RFC:</label>
                    <input type="text" name="rfc" size="30" style={{ width: '250px' }} onChange={handleRfc} />
                </div>
            </p>
            <h4>Dirección</h4>
            <p>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} for="name">Estado:</label>
                    <select style={{ width: '260px' }} name="estado" id="estado">
                        <option value="0"></option>
                        <option value="S">Michoacan</option>
                        <option value="C">Jalisco</option>
                        <option value="D">Colima</option>
                        <option value="V">Gerrero</option>
                    </select>&nbsp;
                </div>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} for="name">Ciudad:</label>
                    <input style={{ width: '250px' }} type="text" name="ciudad" size="30" onChange={handleCiudad} />&nbsp;
                </div>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} for="name">Colonia:</label>
                    <input style={{ width: '250px' }} type="text" name="colonia" size="30" onChange={handleColonia} />&nbsp;
                </div>
                <div >
                    <label style={{ display: 'block' }} for="name">Código postal:</label>
                    <input style={{ width: '250px' }} type="text" name="cp" size="20" maxlength="5" onChange={handleCodigoPostal} />
                </div>
            </p>
            <p>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} for="name">Calle:</label>
                    <input style={{ width: '250px' }} type="text" name="calle" size="30" onChange={handleCalle} />&nbsp;
                </div>
                <div >
                    <label style={{ display: 'block' }} for="name">Numero:</label>
                    <input style={{ width: '250px' }} type="number" name="numero" size="20" min="1" onChange={handleNumero} />
                </div>
            </p>
            <h4>Datos de contacto</h4>
            <p>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} for="name">Teléfono Casa:</label>
                    <input style={{ width: '250px' }} type="tel" name="telefono" size="30" onChange={handleTelefonoCasa} />&nbsp;
                </div>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} for="name">Teléfono Celular :</label>
                    <input style={{ width: '250px' }} type="tel" name="celular" size="30" onChange={handleCelular} />&nbsp;
                </div>
                <div >
                    <label style={{ display: 'block' }} for="name">Email:</label>
                    <input style={{ width: '250px' }} type="email" name="email" size="30" onChange={handleEmail} />
                </div>
            </p>
            {/*
            <input type="text" value={campo1} onChange={handleCampo1Change} />
            <input type="text" value={campo2} onChange={handleCampo2Change} />
            <button type="submit">Enviar</button>
    */}
        </form>
    );
};

export default ClienteForm;
