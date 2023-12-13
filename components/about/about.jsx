import React from 'react';
import {
    Grid,
    Box,
    Typography
} from '@mui/material';
import './about.css'

const About = () => {
    return (
        <>
            <section className='section'>
                <Typography variant='h4' className='heading'>
                    Quienes Somos
                </Typography>
                <Grid container spacing={3} sx={{
                    // border: '2px solid red',
                }}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={4} sx={{
                        // border: '2px solid blue'
                    }}>
                        <div style={{
                            // border: '2px solid red',
                            width: '40%',
                            margin: 'auto',
                            height: '10rem'
                        }}>
                            <img src="/assets/about/logo.jpg" alt="" style={{
                                height: '100%',
                                width: '100%'
                            }} />
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                            El Instituto Universitario de Corretaje Inmobiliario (IUCILA) surge a partir del acuerdo entre la Confederación Inmobiliaria Latinoamericana (CILA) y la Universidad Gastón Dachary (UGD) a los efectos de impulsar la cooperación para la formación, capacitación y actualización profesional en toda Latinoamérica
                        </Typography>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
            </section>

            <section className='section'>
                <Typography variant='h4' className='heading'>
                    Instituciones Fundadoras
                </Typography>
                <Grid container spacing={3} sx={{
                    // border: '2px solid red',
                }}
                >
                    <Grid item xs={2}></Grid>
                    <Grid item xs={4} sx={{
                        // border: '2px solid blue'
                    }}>
                        <div style={{
                            width: '60%',
                            // border: '2px solid red',
                            margin: 'auto',
                            height: '17rem'
                        }}>
                            <img src="/assets/about/img-1.png" alt="" style={{
                                height: '100%',
                                width: '100%'
                            }} />
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                            La Confederación Inmobiliaria Latinoamericana, fue fundada en 2012, integra a las organizaciones líderes del mercado de bienes raíces en Latinoamérica y representa a más de 700.000 Corredores y Empresas Inmobiliarias en 18 países de Latinoamérica.
                            Brinda soporte institucional a toda la comunidad inmobiliaria latinoamericana, defendiendo los intereses profesionales de nuestros agremiados y buscando la integración de los Negocios Internacionales, creando condiciones éticas, competitivas y de excelencia profesional.
                            Tiene por objetivo, la profesionalización del sector a todo nivel velando por los intereses de todos y cada  uno de nuestros Miembros Asociados.
                        </Typography>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>

                <Grid container spacing={3} sx={{
                    // border: '2px solid red',
                    mt: 5
                }}
                >
                    <Grid item xs={2}></Grid>
                    <Grid item xs={4} sx={{
                        // border: '2px solid blue'
                    }}>
                        <div style={{
                            width: '50%',
                            // border: '2px solid red',
                            margin: 'auto',
                            height: '13rem'
                        }}>
                            <img src="/assets/about/img-1.png" alt="" style={{
                                height: '100%',
                                width: '100%'
                            }} />
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                            En 1997 la Universidad Gastón Dachary fue la primera Universidad autorizada por la Comisión Nacional de Evaluación y Acreditación Universitaria (CONEAU), y se somete periódicamente a las evaluaciones externas del organismo que analiza todas sus funciones, y atiende las recomendaciones para el mejoramiento permanente de la calidad.
                        </Typography>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                    }}>
                        <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                            En 1998 la UGD inició sus actividades en la Provincia de Misiones, Argentina, y desde entonces viene ejecutando su plan de crecimiento desarrollando las sedes en la Provincia del Chaco y en la Ciudad de Buenos Aires.
                        </Typography>
                        <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                            Desde sus comienzos, la UGD se ha enfocado en desarrollar una  AMPLIA RED DE VÍNCULOS INTERNACIONALES, participando activamente en la Organización Universitaria Interamericana (OUI) y en la Red Interuniversitaria CIDIR. Además se vincula a organizaciones que aportan a su desarrollo en áreas temáticas específicas, como la Guardia Civil Española, para el desarrollo de sus carreras en el área de Seguridad, o la Confederación Inmobiliaria latinoamericana, para el desarrollo de las carreras de Corretaje y Negocios Inmobiliarios.
                        </Typography>
                        <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                            En 2017, la UGD acreditó por  la CONEAU su  <b>SISTEMA DE EDUCACIÓN A DISTANCIA (SIED).  El equipo de UGD innova permanentemente a fin de aportar las mejores herramientas y estrategias para lograr los más efectivos métodos de formación.</b>
                        </Typography>

                        <Grid container spacing={2} className="programsContainer">
                            <Grid item xs={2} className='programsDiv'>
                                <Typography variant='h6'>años formando profesionales</Typography>
                                <Typography variant='h2'>25</Typography>
                            </Grid>
                            <Grid item xs={2} className='programsDiv'>
                                <Typography variant='h6'>egresados</Typography>
                                <Typography variant='h2'>4100</Typography>
                            </Grid>
                            <Grid item xs={2} className='programsDiv'>
                                <Typography variant='h6'>carreras de grado</Typography>
                                <Typography variant='h2'>18</Typography>
                            </Grid>
                            <Grid item xs={2} className='programsDiv'>
                                <Typography variant='h6'>especializaciones y maestrías</Typography>
                                <Typography variant='h2'>5</Typography>
                            </Grid>
                            <Grid item xs={2} className='programsDiv'>
                                <Typography variant='h6'>doctorado</Typography>
                                <Typography variant='h2'>1</Typography>
                            </Grid>
                            <Grid item xs={2} className='programsDiv'>
                                <Typography variant='h6'>continentes, en que se desempeñan nuestros egresados.</Typography>
                                <Typography variant='h2'>4</Typography>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
            </section>

            <section className="section">
                <Typography variant='h4' className='heading'>
                    Autoridades
                </Typography>
                <Grid container spacing={3} sx={{
                    // border: '2px solid red',
                }}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={4} sx={{
                        // border: '2px solid blue'
                    }}>
                        <div style={{
                            // border: '2px solid red',
                            width: '50%',
                            height: '15rem'
                        }}>
                            <img src="/assets/about/founder.jpg" alt="" style={{
                                height: '100%',
                                width: '100%'
                            }} />
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                            <b>Arq. Javier Grandinetti,</b>
                            Actualmente es Director de Carrera Licenciatura en Corretaje Inmobiliario, es Docente de la Pontificia Universidad Católica Argentina desde el año 2016, socio gerente de Grandinetti Negocios Inmobiliarios en Rosario. Cumplió funciones como Presidente de CILA en 2017, actualmente es miembro permanente del Consejo Consultivo y Presidente del Comité de Congresos de CILA. Presidente de la Federación Inmobiliaria de la república Argentina (FIRA) desde 2012 a 2016, Presidente del Colegio de Corredores Inmobiliarios de Santa Fe sede Rosario (COCIR) desde 2011 a 2015, Presidente de la Cámara de Empresas Inmobiliarias de Rosario (CADEIROS) desde 2007 a 2011.
                        </Typography>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
            </section>

            <br /><br /> <br />
        </>
    )
}

export default About