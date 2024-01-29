import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./Navbar.css";

const Sidebar = (props) => {
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleStateChange = (state) => setMenuOpen(state.isOpen);

    const closeMenu = () => setMenuOpen(false);

    const handleButtonClick = (btnText) => {
        console.log(btnText);
        switch (btnText) {
            case 'home':
                router.push('/');
                break;
            case 'about':
                router.push('/about');
                break;
            case 'equivalencias':
                router.push('/equivalencias');
                break;
            case 'noticias':
                router.push('/noticias');
                break;
            default:
                break;
        }
        closeMenu();
    }

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

    return (
        <Menu right disableOverlayClick isOpen={menuOpen} onStateChange={handleStateChange}>
            <div className="sidebar">
                <br></br>
                <ul className="nav-list-1">
                    <li className="nav-item">
                        {/* <Link href={"/"}>Home</Link> */}
                        <button className="mobileNavBtn" onClick={() => handleButtonClick('home')}>Home</button>
                    </li>
                    <li className="nav-item">
                        <div className="dropdown">
                            <a>Institucional</a>
                            <div className="dropdown-content">
                                <button className="mobileDropdownNavBtn" onClick={() => handleButtonClick('about')}>Proposito  actividades</button>
                                <button className="mobileDropdownNavBtn" onClick={() => handleButtonClick('about')}>Instituciones Fundadoras</button>
                                <button className="mobileDropdownNavBtn" onClick={() => handleButtonClick('about')}>Antecedentes Fundacionales</button>
                                {/* <Link href={"/about"}>Proposito  actividades</Link>
                                <Link href={'/about'}>Instituciones Fundadoras</Link>
                                <Link href={'/about'}>Antecedentes Fundacionales</Link> */}
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="dropdown">
                            <a>Propuesta Academica</a>
                            <div className="dropdown-content">
                                <button className="mobileDropdownNavBtn" onClick={() => handleButtonClick('academicCommunity/directivos')}>Directivos</button>
                                <button className="mobileDropdownNavBtn" onClick={() => handleButtonClick('academicCommunity/professors')}>Nuestros profesores</button>
                                <button className="mobileDropdownNavBtn" onClick={() => handleButtonClick('academicCommunity/alumnis')}>Nuestros alumnos</button>
                                {/* <Link href="/academicCommunity/directivos ">Directivos</Link>
                                <Link href='/academicCommunity/professors'>Nuestros profesores</Link>
                                <Link href='/academicCommunity/alumnis'>Nuestros alumnos</Link> */}
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="dropdown">
                            <a>Comunidad Acadamica</a>
                            <div className="dropdown-content">
                                <Link href={"/academicProposal "}>Diplomaturas Universitarias en Corretaje y Negocios Inmobiliarios</Link>
                                <Link href={'/academicProposal'}>Corredor inmobiliario universitario</Link>
                                <Link href={'/academicProposal'}>Licenciatura en corretaje y negocios inmobiliarios</Link>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <button className="mobileNavBtn" onClick={() => handleButtonClick('equivalencias')}>Equivalencias</button>
                        {/* <Link href={"/equivalencias"}>Equivalencias</Link> */}
                    </li>
                    <li className="nav-item">
                        {/* <Link href={"/noticias"}>Noticias</Link> */}
                        <button className="mobileNavBtn" onClick={() => handleButtonClick('noticias')}>Noticias</button>
                    </li>
                </ul>
            </div>
        </Menu>
    );
};

export default Sidebar;