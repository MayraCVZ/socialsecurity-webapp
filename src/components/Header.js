import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import "../styles/Header.css"; import Cookies from 'universal-cookie';

const cookies = new Cookies();
const Header = () => {
    const handleLogout = async (e) => {
        cookies.remove('nombre', { path: "./home" });
        console.log('Cerrando sesión...');
    };

    return (
        <nav>
            {/* <img src="./icons/icon_menu.svg" alt="menu" className="menu" /> */}
            <div className="navbar-left">
                {/* <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" /> */}
                <ul>

                    <li className="navbar-logout"><FontAwesomeIcon icon={faBalanceScale} /></li>
                    <li>
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/clientes">Clientes</a>
                    </li>
                    <li>
                        <a href="/asuntos">Asuntos</a>
                    </li>
                    <li>
                        <a href="/expedientes">Expediente</a>
                    </li>
                    <li>
                        <a href="/Seguimiento">Seguimiento</a>
                    </li>
                    <li>
                        <a href="/Agenda">Agenda</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email">{cookies.get('nombre')}</li>
                    <li className="navbar-logout">
                        <a href="/" onClick={handleLogout}>
                            <FontAwesomeIcon icon={faSignOutAlt} />
                        </a></li>
                </ul>
            </div>
        </nav>
    );
};
export default Header;
