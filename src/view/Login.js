import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import UsuarioService from "../services/usuarioService";
import "../styles/Login.css";

const cookies = new Cookies();

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        if (username === '') {
            setModalMessage('Por favor, ingresa tu usuario.');
            setShowModal(true);
        } else if (password === '') {
            setModalMessage('Por favor, ingresa tu contraseña.');
            setShowModal(true);
        } else {
            try {
                const { data } = await UsuarioService.getUsuarioByUserLogin(username, password);
                if (data.length > 0) {
                    cookies.set('nombre', data[0].nombre, { path: "./home" });
                    window.location.href = "./home";
                } else {
                    setModalMessage('El usuario o la contraseña no son correctos');
                    setShowModal(true);
                }
            } catch (error) {
                console.error('Error en la autenticación:', error);
                setModalMessage('Se produjo un error durante la autenticación.');
                setShowModal(true);
            }
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="fondoLogin">
            <header className='App-header'>
                <h1>LAW $YSTEM $OCIAL $ECURITY</h1>
            </header>
            <div className="containerPrincipal">
                <div className="containerSecundario">
                    <h2>BIENVENIDO</h2>
                    <div className="form-group">
                        <label>Usuario: </label>
                        <br /><br />
                        <input
                            type="text"
                            style={{ width: '200px' }}
                            className="form-control"
                            name="username"
                            onChange={handleUsername}
                            required
                        />
                        <br /><br />
                        <label>Contraseña: </label>
                        <br /><br />
                        <input
                            type="password"
                            style={{ width: '200px' }}
                            className="form-control"
                            name="password"
                            onChange={handlePassword}
                            required
                        />
                        <br /><br />
                        <button className="btn btn-primary" onClick={handleLogin}>Iniciar Sesión</button>
                    </div>
                </div>
            </div>
            {showModal && (
                <div id="myModal" className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="close" onClick={closeModal}>&times;</span>
                            <h2> </h2>
                        </div>
                        <div className="modal-body">
                            <p>{modalMessage}</p>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};
export default Login;