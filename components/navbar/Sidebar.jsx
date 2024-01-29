import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import { useRouter } from "next/router";
import "./Navbar.css";

const Sidebar = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);

  
    const handleStateChange = (state) => {
      setMenuOpen(state.isOpen);
    };
  
    const closeMenu = () => {
      setMenuOpen(false);
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

    return (
        <Menu right disableOverlayClick isOpen={menuOpen} onStateChange={handleStateChange}>
            <div className="sidebar">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <ul className="nav-list-1">
                    <li className="nav-item">
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <div className="dropdown">
                            <a>Institucional</a>
                            <div className="dropdown-content">
                                <Link href={"/about"}>Proposito  actividades</Link>
                                <Link href={'/about'}>Instituciones Fundadoras</Link>
                                <Link href={'/about'}>Antecedentes Fundacionales</Link>
                            </div>
                        </div>
                    </li>

                    <li className="nav-item">
                        <div className="dropdown">
                            <a>
                                Propuesta Academica
                            </a>

                            <div className="dropdown-content">
                                <Link href="/academicCommunity/directivos ">Directivos</Link>
                                <Link href='/academicCommunity/professors'>Nuestros profesores</Link>
                                <Link href='/academicCommunity/alumnis'>Nuestros alumnos</Link>
                            </div>
                        </div>
                    </li>

                    <li className="nav-item">
                        <div className="dropdown">
                            <a>
                                Comunidad Acadamica
                            </a>

                            <div className="dropdown-content">
                                <Link href={"/academicProposal "}>Diplomaturas Universitarias en Corretaje y Negocios Inmobiliarios</Link>
                                <Link href={'/academicProposal'}>Corredor inmobiliario universitario</Link>
                                <Link href={'/academicProposal'}>Licenciatura en corretaje y negocios inmobiliarios</Link>
                            </div>
                        </div>
                    </li>

                    <li className="nav-item">
                        <Link href={"/equivalencias"}>Equivalencias</Link>
                    </li>

                    <li className="nav-item">
                        <Link href={"/noticias"}>Noticias</Link>
                    </li>
                </ul>
            </div>
        </Menu>
    );
};

export default Sidebar;