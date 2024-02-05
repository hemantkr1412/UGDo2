import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import { useRouter } from "next/navigation";
import "./navbar.css";

const Sidebar = (props) => {
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleStateChange = (state) => setMenuOpen(state.isOpen);

    const closeMenu = () => setMenuOpen(false);

    const handleButtonClick = (route) => {
        router.push(route);
        closeMenu();
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menuOpen && !event.target.closest(".bm-menu-wrap")) {
                closeMenu();
            }
        };
        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [menuOpen]);

    useEffect(() => {
        document.body.classList.toggle("menu-open", menuOpen);
        return () => {
            document.body.classList.remove("menu-open");
        };
    }, [menuOpen]);

    const dropdownItems = {
        "Institucional": [
            { text: "Proposito  actividades", route: "/about" },
            { text: "Instituciones Fundadoras", route: "/about" },
            { text: "Antecedentes Fundacionales", route: "/about" }
        ],
        "Propuesta Academica": [
            { text: "Directivos", route: "/academicCommunity/directivos" },
            { text: "Nuestros profesores", route: "/academicCommunity/professors" },
            { text: "Nuestros alumnos", route: "/academicCommunity/alumnis" }
        ],
        "Comunidad Acadamica": [
            { text: "Diplomaturas Universitarias en Corretaje y Negocios Inmobiliarios", route: "" },
            { text: "Corredor inmobiliario universitario", route: "" },
            { text: "Licenciatura en corretaje y negocios inmobiliarios", route: "" }
        ]
    };

    return (
        <Menu right disableOverlayClick isOpen={menuOpen} onStateChange={handleStateChange}>
            <div className="sidebar">
                <ul className="nav-list-1">
                    <li className="nav-item">
                        <button className="mobileNavBtn" onClick={() => handleButtonClick('/')}>Home</button>
                    </li>
                    {Object.entries(dropdownItems).map(([title, items], index) => (
                        <li key={index} className="nav-item">
                            <div className="dropdown">
                                <a>{title}</a>
                                <div className="dropdown-content">
                                    {items.map((item, index) => (
                                        <button key={index} className="mobileDropdownNavBtn" onClick={() => handleButtonClick(item.route)}>{item.text}</button>
                                    ))}
                                </div>
                            </div>
                        </li>
                    ))}
                    <li className="nav-item">
                        <button className="mobileNavBtn" onClick={() => handleButtonClick('/equivalencias')}>Equivalencias</button>
                    </li>
                    <li className="nav-item">
                        <button className="mobileNavBtn" onClick={() => handleButtonClick('/noticias')}>Noticias</button>
                    </li>
                </ul>
            </div>
        </Menu>
    );
};

export default Sidebar;
