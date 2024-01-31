'use client'

import { useState } from 'react';
import { Typography } from "@mui/material";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { AccessTimeFilled, AccountBalance, School, WorkspacePremium, Gavel, LocalLibrary } from "@mui/icons-material";
import './Courses.css'

const coursesCard = [
    {
        icon: <AccessTimeFilled />,
        title: "Duracion: ",
        desc: "4 años"
    },
    {
        icon: <AccountBalance />,
        title: "Modalidad: ",
        desc: "Presencial"
    },
    {
        icon: <School />,
        title: "Titulo: ",
        desc: "Lorem ipsum dolor sit amet."
    },
    {
        icon: <WorkspacePremium />,
        title: "Titulo Complementario: ",
        desc: "Certificado"
    },
    {
        icon: <Gavel />,
        title: "Resolution Ministerial: ",
        desc: "R.M./1373/2021"
    },
    {
        icon: <LocalLibrary />,
        title: "Fecha de incio: ",
        desc: "2023"
    }

];

const Course1 = () => {
    const [activePage, setActivePage] = useState('page1')

    const handlePageClick = (page) => {
        setActivePage(page)
    }

    return (
        <>
            <div className='coursePage'>
                <Typography className='courseTitle' variant="h4">Licenciatura en Corretaje y Negocios Inmobiliarios</Typography>
                <div className="courses">
                    <div className="course">
                        <div className="courseNavbar">
                            <button onClick={() => handlePageClick('page1')} className={activePage === 'page1' ? 'activeBtn' : ''}>Sobre este programa</button>
                            <button onClick={() => handlePageClick('page2')} className={activePage === 'page2' ? 'activeBtn' : ''}>Plan de estudios </button>
                            <button onClick={() => handlePageClick('page3')} className={activePage === 'page3' ? 'activeBtn' : ''}>Admision y financiacion</button>
                        </div>
                        <div className="content">
                            <div className="page1Content" style={{ display: activePage === 'page1' ? 'block' : 'none' }}>
                                <br></br>
                                <Typography variant="body1"><b>Alcances del título: </b></Typography>
                                <br></br>
                                <p><b>El egresado podrá: </b></p>
                                <br></br>
                                <p>Desarrollar una sólida formación teórica y práctica para el ejercicio eficiente y responsable de la profesión de Corretaje Inmobiliario.</p>
                                <br></br>
                                <p>Incorporar los conocimientos jurídicos, contables e instrumentales que te formarán un perfil de calidad profesional.</p>
                                <br></br>
                                <p>Estar capacitado para formular las estrategias y motivaciones para el permanente perfeccionamiento y la capacitación continua en las diversas áreas de la profesión.</p>
                                <br></br>
                                <p>Desarrollar los conocimientos de las diversas especialidades y orientaciones propias de la profesión.</p>
                                <br></br>
                            </div>

                            <div className="page2Content" style={{ display: activePage === 'page2' ? 'block' : 'none' }}>
                                <br></br>
                                <Typography variant='h6'><b>Plan de estudios:</b></Typography>
                                <br></br>
                                <table>
                                    <tr>
                                        <th>año</th>
                                        <th>Datos del curso</th>
                                    </tr>
                                    <tr>
                                        <td>1º Año</td>
                                        <td>
                                            <ul>
                                                <li>Técnicas de la Comunicación Oral y Escrita</li>
                                                <li>Matemática y Estadística</li>
                                                <li>Derecho Privado</li>
                                                <li>Principios de Corretaje</li>
                                                <li>Informática</li>
                                                <li>Topografía y Geodesia</li>
                                                <li>Derecho Comercial</li>
                                                <li>Arquitectura, Construcción y Urbanismo I</li>
                                                <li>Valoración y Protección del Patrimonio Monumental y Natural</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2º Año</td>
                                        <td>
                                            <ul>
                                                <li>Arquitectura, Construcción Y Urbanismo II</li>
                                                <li>Matemática Financiera</li>
                                                <li>Principios Derechos Reales y Registrales</li>
                                                <li>
                                                    Tasaciones de Bienes Muebles
                                                </li>
                                                <li>
                                                    Ética y Practica Profesional
                                                </li>
                                                <li>
                                                    Contabilidad y Finanzas

                                                </li>
                                                <li>
                                                    Tasación de Bienes Inmuebles

                                                </li>
                                                <li>
                                                    Aspectos Financieros de los Negocios Inmobiliarios

                                                </li>
                                                <li>
                                                    Marketing Inmobiliario
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3º Año</td>
                                        <td>
                                            <ul>
                                                <li>Fundamentos de Fideicomisos, Loteos y Barrios Cerrados</li>
                                                <li>Gestión de Desarrollos Inmobiliarios</li>
                                                <li>Corretaje Inmobiliario Empresarial</li>
                                                <li>
                                                    Herramientas Tecnológicas
                                                </li>
                                                <li>
                                                    Administración de Consorcios y Propiedades
                                                </li>
                                                <li>
                                                    Práctica Profesional Supervisada I
                                                </li>
                                                <li>
                                                    Métodos y Técnicas de la Investigación
                                                </li>
                                                <li>
                                                    Tasación de Bienes Rurales, Culturales e Intangibles
                                                </li>
                                                <li>
                                                    Régimen Jurídico de la Propiedad Horizontal
                                                </li>
                                                <li>
                                                    Economía Aplicada al Proyecto Urbano
                                                </li>
                                                <li>
                                                    Métodos y Normativas de la Tasación
                                                </li>

                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4º Año</td>
                                        <td>
                                            <ul>
                                                <li>Bases del Desarrollo Emprendedor</li>
                                                <li>Tipología Arquitectónica</li>
                                                <li>Estudio Técnico y de Producto Inmobiliario</li>
                                                <li>Geografía Demográfica y Económica </li>
                                                <li>Práctica Profesional Supervisada II </li>
                                                <li>Taller de Investigación Final I </li>
                                                <li>Formulación y Evaluación de Proyectos de Inversión </li>
                                                <li>Negociación, Mediación y Arbitraje </li>
                                                <li>Mantenimiento, Higiene y Seguridad </li>
                                                <li>Bases Impositivas, Contables y Financieras</li>
                                                <li>Horizontes del Negocio Inmobiliario </li>
                                                <li>Taller de Investigación Final II </li>

                                            </ul>
                                        </td>
                                    </tr>
                                </table>
                                <br></br>
                            </div>

                            <div className="page3Content" style={{ display: activePage === 'page3' ? 'block' : 'none' }}>
                                <br></br>
                                <Typography variant='h6'><b>Objetivos de la carrera</b></Typography>
                                <br></br>
                                <p>Profesionalizar la tarea de Corretaje y Negocios Inmobiliarios a través del fortalecimiento de las capacidades para reflexionar, planificar, ejecutar, evaluar y modificar su práctica en relación con las funciones que cumple en la sociedad..</p>
                                <br></br>
                                <p>Aportar elementos técnicos, administrativos y jurídicos que correspondan a la aplicación de la actividad inmobiliaria.</p>
                                <br></br>
                                <p>Aplicar estrategias de formación continua con diferentes modalidades que estimulan el intercambio y asesoramiento conformando grupos de trabajos con dinámicas propias.</p>
                                <br></br>
                                <p>Brindar una sólida formación profesional, técnica y ética, que le permita al egresado ejercer esta actividad con la atención centrada en la satisfacción plena de quien reciba sus servicios.</p>
                                <br></br>
                            </div>
                        </div>
                    </div>

                    <div className='courseCard'>
                        <Card sx={{ maxWidth: 345, }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image='/assets/home/courses/course-1.png'
                            />
                            {coursesCard.map((info, index) => (
                                <CardContent className='media'>
                                    <div className='mediaContent'>
                                        {info.icon}
                                        <Typography variant="h7" component="div">
                                            <b>{info.title}</b> {info.desc}
                                        </Typography>
                                    </div>
                                </CardContent>
                            ))}
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Course1;