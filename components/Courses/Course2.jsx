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
        desc: "3 años"
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

const Course4 = () => {
    const [activePage, setActivePage] = useState('page1')

    const handlePageClick = (page) => {
        setActivePage(page)
    }

    return (
        <>
            <div className='coursePage'>
                <Typography className='courseTitle' variant="h4">Técnico universitario en Corretaje y Negocios Inmobiliarios</Typography>
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
                                <p><b>Destinatarios : </b>Quienes deseen desempeñarse en el mercado inmobiliario con una formación en todos las áreas relacionadas al corretaje.</p>
                            </div>

                            <div className="page2Content" style={{ display: activePage === 'page2' ? 'block' : 'none' }}>
                                <Typography variant='h6' sx={{ my: 5 }}><b>Plan de estudios:</b></Typography>
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
                                                <li>Derecho Privado </li>
                                                <li>Principios de Corretaje</li>
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
                                                <li>Arquitectura, Construcción y Urbanismo II</li>
                                                <li>Matemática Financiera</li>
                                                <li>Principios Derechos Reales y Registrales</li>
                                                <li>Tasaciones de Bienes Muebles</li>
                                                <li>Ética y Practica Profesional</li>
                                                <li>Contabilidad y Finanzas</li>
                                                <li>Tasación de Bienes Inmuebles</li>
                                                <li>Aspectos Financieros de los Negocios Inmobiliarios</li>
                                                <li>Marketing Inmobiliario</li>
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
                                                <li>Herramientas Tecnológicas</li>
                                                <li>Administración de Consorcio y Propiedades</li>
                                                <li>Práctica Profesional Supervisada I</li>
                                                <li>Métodos y Técnicas de la Investigación</li>
                                                <li>Tasación de Bienes Rurales, Culturales e Intangibles</li>
                                                <li>Régimen Jurídico de la Propiedad Horizontal</li>
                                                <li>Economía Aplicada al Proyecto Urbano</li>
                                                <li>Métodos y Normativas de la Tasación</li>
                                                <li>Derechos Humanos, de la Vivienda y la Ciudad</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </table>
                                <br></br>
                            </div>

                            <div className="page3Content" style={{ display: activePage === 'page3' ? 'block' : 'none' }}>
                                <Typography variant="body1" sx={{ my: 3, fontWeight:'600'}}>Alcances del título:</Typography>
                                <p>El egresado podrá :</p>
                                <br />
                                <ul>
                                    <li> Ejercer el Corretaje y venta de bienes por cuenta de terceros.</li>
                                    <li>Realizar actos propios del corretaje y la intermediación, poniendo en relación a las partes para la conclusión del contrato proyectado por su comitente.</li>
                                    <li>Desarrollar la gestión integral de la actividad inmobiliaria</li>
                                    <li>Realizar tasaciones de bienes inmuebles, como también procesos de diseño y evaluación de proyectos inmobiliarios.</li>
                                    <li>Participar en el diseño de pautas eficaces de comunicación y promoción del mercado inmobiliario.</li>
                                    <li>Ejercer la intermediación imparcial entre la oferta y la demanda, o corretaje en la compraventa de bienes muebles e inmuebles u otro tipo de explotación económica u otros bienes susceptibles de valor económico.</li>
                                    <li>Recabar información de los organismos correspondientes y efectuar gestiones administrativas pertinentes dentro de las entidades gubernamentales que actúan en el sector.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='courseCard'>
                        <Card sx={{ maxWidth: 345, }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image='/assets/home/courses/course-2.png'
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

export default Course4;