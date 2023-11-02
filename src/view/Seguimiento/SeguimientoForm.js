import React, { useState } from 'react';

function SeguimientoForm() {
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
                Ejercicio: <input type="text" name="ejercicio" size="5" />&nbsp;
                Num.Expediente: <select name="clacificacion" id="clacificacion" >
                    <option value="0"></option>
                    <option value="P">001</option>
                    <option value="R">002</option>
                </select>&nbsp;
                Tipo de asunto: <input type="text" name="tipoAsunto" size="15" />&nbsp;
                Clasificación: <input type="text" name="clacificacion" size="15" />&nbsp;
                Categoría :<input type="text" name="categoria" size="15" />&nbsp;
            </p>
            <p>
                Fecha: <input type="date" name="fecha" size="15" />&nbsp;
                Hora inicio: <input type="time" name="horaIni" size="5" />&nbsp;
                Hora fin: <input type="time" name="haraFin" size="5" />&nbsp;
                Seguimiento :<input type="text" name="segimiento" size="55" />&nbsp;
            </p>
        </form>
    );
}

export default SeguimientoForm;
