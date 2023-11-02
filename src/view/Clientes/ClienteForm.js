import React, { useState } from 'react';

function ClienteForm() {
    const [campo1, setCampo1] = useState('');
    const [campo2, setCampo2] = useState('');
    // Repite esto para los otros 19 campos

    const handleCampo1Change = (e) => {
        setCampo1(e.target.value);
    };
    const handleCampo2Change = (e) => {
        setCampo2(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Envía los datos del formulario o realiza cualquier otra acción necesaria
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
                    <input type="text" name="nombre" size="30" style={{ width: '250px' }} />&nbsp;
                </div>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} for="name">Apellido paterno</label>
                    <input type="text" name="apellidoP" size="30" style={{ width: '250px' }} />&nbsp;
                </div>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} for="name">Apellido materno</label>
                    <input type="text" name="apellidoA" size="30" style={{ width: '250px' }} />&nbsp;
                </div>
                <div >
                    <label style={{ display: 'block' }} for="name">Fecha registro</label>
                    <input type="date" name="fechaRegistro" size="40" style={{ width: '250px' }} />
                </div>
            </p>
            <p>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} for="name">Fecha nacimiento:</label>
                    <input type="tedatext" name="fechaNacimiento" size="30" style={{ width: '250px' }} />&nbsp;
                </div>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} for="name">Lugar nacimiento:</label>
                    <input type="text" name="lugarNacimiento" size="30" style={{ width: '250px' }} />&nbsp;
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
                <div >
                    <label style={{ display: 'block' }} for="name">Edad:</label>
                    <input type="number" name="edad" size="30" min="50" max="200" />
                </div>
            </p>
            <p>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} for="name">NSS:</label>
                    <input type="number" name="nss" size="40" style={{ width: '250px' }} />&nbsp;
                </div>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} for="name">CURP:</label>
                    <input type="text" name="curp" size="30" style={{ width: '250px' }} />&nbsp;
                </div>
                <div >
                    <label style={{ display: 'block' }} for="name">RFC:</label>
                    <input type="text" name="rfc" size="30" style={{ width: '250px' }} />
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
                    <input style={{ width: '250px' }} type="text" name="ciudad" size="30" />&nbsp;
                </div>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} for="name">Colonia:</label>
                    <input style={{ width: '250px' }} type="text" name="colonia" size="30" />&nbsp;
                </div>
                <div >
                    <label style={{ display: 'block' }} for="name">Código postal:</label>
                    <input style={{ width: '250px' }} type="text" name="cp" size="20" maxlength="5" />
                </div>
            </p>
            <p>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} for="name">Calle:</label>
                    <input style={{ width: '250px' }} type="text" name="calle" size="30" />&nbsp;
                </div>
                <div >
                    <label style={{ display: 'block' }} for="name">Numero:</label>
                    <input style={{ width: '250px' }} type="number" name="numero" size="20" min="1" />
                </div>
            </p>
            <h4>Datos de contacto</h4>
            <p>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} for="name">Teléfono Casa:</label>
                    <input style={{ width: '250px' }} type="tel" name="telefono" size="30" />&nbsp;
                </div>
                <div style={{ float: 'left', marginRight: '20px' }}>
                    <label style={{ display: 'block' }} for="name">Teléfono Celular :</label>
                    <input style={{ width: '250px' }} type="tel" name="celular" size="30" />&nbsp;
                </div>
                <div >
                    <label style={{ display: 'block' }} for="name">Email:</label>
                    <input style={{ width: '250px' }} type="email" name="email" size="30" />
                </div>
            </p>
            {/*
            <input type="text" value={campo1} onChange={handleCampo1Change} />
            <input type="text" value={campo2} onChange={handleCampo2Change} />
            <button type="submit">Enviar</button>
    */}
        </form>
    );
}

export default ClienteForm;
