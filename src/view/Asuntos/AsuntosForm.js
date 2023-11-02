import React, { useState } from 'react';

function AsuntosForm() {
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
            <h4>Datos del cliente</h4>
            <p>
                Cliente: <select name="cliente" id="cliente" >
                    <option value="0"></option>
                    <option value="1">Pedro Perez</option>
                    <option value="2">Andra Rodriguez</option>
                    <option value="3">Jose Hernandez</option>
                    <option value="4">Maria Gutierrez</option>
                </select>&nbsp;
                CURP: <input type="text" name="curp" size="30" />&nbsp;
                RFC: <input type="text" name="rfc" size="30" />&nbsp;
                NSS: <input type="number" name="nss" size="30" />
            </p>
            <p>
                Estado: <input type="text" name="ciudad" size="30" />&nbsp;
                Ciudad: <input type="text" name="ciudad" size="30" />&nbsp;
                Teléfono: <input type="tel" name="celular" size="30" />&nbsp;
            </p>
            <h4>Asunto</h4>
            <p>
                Ejercicio: <input type="text" name="nombre" size="5" />&nbsp;
                Num.Expediente: <input type="text" name="apellidoP" size="5" />&nbsp;
                Tipo de asunto: <select name="clacificacion" id="clacificacion" >
                    <option value="0"></option>
                    <option value="P">Pencion</option>
                    <option value="R">Recuperacion de recursos</option>
                </select>&nbsp;
                Clasificación: <select name="clacificacion" id="clacificacion" >
                    <option value="0"></option>
                    <option value="1">IMSS - Ley 73</option>
                    <option value="2">IMSS Ley 97- </option>
                    <option value="3">ISSSTE</option>
                </select>&nbsp;
                Categoría : <select name="categoria" id="categoria" >
                    <option value="0"></option>
                    <option value="1">Pensión de Cesantía</option>
                    <option value="2">Pensión de Vejez</option>
                    <option value="3">Pensión de Viudez</option>
                    <option value="4">Pensión de Riesgo de Trabajo</option>
                </select>&nbsp;
            </p>
            <p>
                Fecha inicio: <input type="date" name="fechaInicio" size="30" />&nbsp;
                Estatus: <select name="estatus" id="estatus" >
                    <option value="A">Activo</option>
                    <option value="I">Inactivo</option>
                    <option value="C">Cancelado</option>
                    <option value="F">Finalizar</option>
                </select>&nbsp;
            </p>
        </form>
    );
}

export default AsuntosForm;
