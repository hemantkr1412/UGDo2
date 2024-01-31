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

const Course4 = () => {
    const [activePage, setActivePage] = useState('page1')

    const handlePageClick = (page) => {
        setActivePage(page)
    }

    return (
        <>
            <div className='coursePage'>
                <Typography className='courseTitle' variant="h4">Diplomatura Universitaria en Tasación de Inmuebles
                </Typography>
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
                                <Typography variant="body1">El diplomado estará capacitado para participar en la realización de tasaciones y valuaciones de inmuebles, a partir del conocimiento de la metodología para la valoración arquitectónica, fiscal, legal, ambiental y cultural entre otras.</Typography>
                                <br></br>
                                <div className='coursePoints'>
                                    <p>Materias :</p>
                                    <ul>
                                        <li>Arquitectura, Construcción y Urbanismo</li>
                                        <li>Tasación de Bienes Rurales, Culturales e Intangibles</li>
                                        <li> Métodos y Normativas de la Tasación</li>
                                        <li>Estudio Técnico y de Producto Inmobiliario</li>
                                        <li>Tasación de Bienes Inmuebles</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="page2Content" style={{ display: activePage === 'page2' ? 'block' : 'none' }}>
                                <br></br>
                                <Typography variant='h6'><b>Formación de corta duración, concreta y aplicable,</b></Typography>
                                <p> que se puede complementar posteriormente realizando una formación de grado para profundizar tu profesionalización.</p>
                                <br></br>
                                <Typography variant='h6'><b>
                                    Trayectos de formación flexible: </b></Typography>
                                <p>
                                    El estudiante podrá tomar tramos independientes, y adaptar la duración y dedicación a su disponibilidad horaria.
                                </p>
                                <br></br>
                                <Typography variant='h6'>
                                    <b>DESTINATARIOS:</b>
                                </Typography>
                                <br></br>
                                <p>
                                    Quienes se desempeñen en el ámbito inmobiliario, y aspiren a mejorar su formación, adquiriendo nuevas capacidades específicas.
                                </p>
                                <br></br>
                                <p>Toda persona que desee formarse para desempeñarse en el mercado inmobiliario.</p>
                                <br></br>
                            </div>

                            <div className="page3Content" style={{ display: activePage === 'page3' ? 'block' : 'none' }}>
                                <br></br>
                                <Typography variant='h6'><b>MODALIDAD :</b></Typography>
                                <br></br>
                                <p><b>100% bajo la modalidad a distancia : </b>Se puede cursar desde cualquier lugar del mundo que disponga de conexión a Internet.</p>
                                <br></br>
                                <p><b>Clases sincrónicas y asincrónicas : </b>Las clases se dictarán en modalidad virtual, en forma sincrónica, quedando grabadas en las aulas de UGD Virtual, disponibles para ser visualizadas todas las veces que sea necesario.</p>
                                <br></br>
                                <p><b>Recursos de aprendizaje en el aula virtual : </b>Los alumnos dispondrán de contenidos en diversos formatos, adaptados al desarrollo de cada tema (documentos, sitios webs, foros, podcasts, contenidos audiovisuales y otros recursos digitales de comunicación e interacción con el equipo docente).</p>
                                <br></br>
                                <p><b>Cinco materias por diplomatura: </b>dos en un cuatrimestre y tres en otro.</p>
                                <br></br>
                                <br></br>

                                <Typography variant='h6'><b>TUTORÍAS Y CENTROS TUTORIALES:</b></Typography>
                                <br></br>
                                <p>Los estudiantes dispondrán de tutores on-line que los orientarán en el desarrollo de su carrera y atenderán sus dudas cotidianas.</p>
                                <br></br>
                                <p>Además, es sitios puntuales se dispondrán Centros Tutoriales que podrán utilizar optativamente. En los mismos se desarrollarán actividades de apoyo estudiantil.</p>
                                <br></br>
                                <br></br>

                                <Typography variant='h6'><b>Nuestras diplomaturas:</b></Typography>
                                <br></br>
                                <p> Diplomado Universitario en Tasación de Inmuebles </p>
                                <br></br>
                                <p>Diplomado Universitario en Negocios y Marketing Inmobiliario </p>
                                <br></br>
                                <p>  Diplomado Universitario en Proyectos Inmobiliarios </p>
                                <br></br>
                                <p>Diplomado Universitario en Gestión Inmobiliaria.  </p>
                                <br></br>
                                <br></br>
                                <p>(Aprobación: Resolución de UGD Nro. 79/A/22. Todas las diplomaturas tienen una duración de dos cuatrimestres)</p>
                            </div>
                        </div>
                    </div>

                    <div className='courseCard'>
                        <Card sx={{ maxWidth: 345, }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image='/assets/home/courses/course-3.png'
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