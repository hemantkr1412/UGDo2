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
            <br /><br />
            <section className='section'>
                <Typography variant='h4' className='heading'>
                    Quienes Somos
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={5} className="imgGrid">
                        <div className="imgDiv">
                            <img src="/assets/about/logo.png" alt="" />
                        </div>
                    </Grid>
                    <Grid item xs={5} className='textGrid'>
                        <Box className="textGridBox">
                            <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                                El Instituto Universitario de Corretaje Inmobiliario (IUCILA) surge a partir del acuerdo entre la Confederación Inmobiliaria Latinoamericana (CILA) y la Universidad Gastón Dachary (UGD) a los efectos de impulsar la cooperación para la formación, capacitación y actualización profesional en toda Latinoamérica
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </section>

            <br /><br />

            <section className='section'>
                <Typography variant='h4' className='heading'>
                    Instituciones Fundadoras
                </Typography>
                <Grid container spacing={3} sx={{
                    // background:'var(--yellow)'
                }}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={5} className="imgGrid">
                        <div className="imgDiv">
                            <img src="/assets/about/logo.png" alt="" />
                        </div>
                    </Grid>
                    <Grid item xs={5} className='textGrid'>
                        <Box className="textGridBox">
                            <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                                La Confederación Inmobiliaria Latinoamericana, fue fundada en 2012, integra a las organizaciones líderes del mercado de bienes raíces en Latinoamérica y representa a más de 700.000 Corredores y Empresas Inmobiliarias en 18 países de Latinoamérica.
                                Brinda soporte institucional a toda la comunidad inmobiliaria latinoamericana, defendiendo los intereses profesionales de nuestros agremiados y buscando la integración de los Negocios Internacionales, creando condiciones éticas, competitivas y de excelencia profesional.
                                Tiene por objetivo, la profesionalización del sector a todo nivel velando por los intereses de todos y cada  uno de nuestros Miembros Asociados.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </section>

            <section className='section'>
                {/* <Typography variant='h4' className='heading'>
                    Instituciones Fundadoras
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={4}>
                        <div style={{
                            width: '60%',
                            margin: 'auto',
                            height: '17rem'
                        }}>
                            <img src="/assets/about/logo.png" alt="" style={{
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
                </Grid> */}

                <Grid container spacing={3} sx={{ mt: 5 }}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={5} className="imgGrid">
                        <div className="imgDiv">
                            <img src="/assets/about/logo.png" alt="" />
                        </div>
                    </Grid>
                    <Grid item xs={5} className='textGrid'>
                        <Box className="textGridBox">
                            <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                                En 1997 la Universidad Gastón Dachary fue la primera Universidad autorizada por la Comisión Nacional de Evaluación y Acreditación Universitaria (CONEAU), y se somete periódicamente a las evaluaciones externas del organismo que analiza todas sus funciones, y atiende las recomendaciones para el mejoramiento permanente de la calidad.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        background: 'var(--blue)',
                        color: 'white',
                        padding: '4rem !important'
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
                        <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                            Los números de la UGD confirman la vocación de educar e innovar en la oferta de carreras de grado y posgrado para el mundo empresarial, la salud, la educación y la seguridad:
                        </Typography>

                        <Grid container className="programsContainer">
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
                    <Grid item xs={1}></Grid>
                </Grid>
            </section>

            <br /><br />

            <section className="section">
                <Typography variant='h4' className='heading'>
                    Autoridades
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={5} className="imgGrid">
                        <div className="imgDiv">
                            <img src="/assets/about/founder.png" alt="" />
                        </div>
                    </Grid>
                    <Grid item xs={5} className='textGrid'>
                        <Box className="textGridBox">
                            <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                                <b>Arq. Javier Grandinetti,</b>
                                Actualmente es Director de Carrera Licenciatura en Corretaje Inmobiliario, es Docente de la Pontificia Universidad Católica Argentina desde el año 2016, socio gerente de Grandinetti Negocios Inmobiliarios en Rosario. Cumplió funciones como Presidente de CILA en 2017, actualmente es miembro permanente del Consejo Consultivo y Presidente del Comité de Congresos de CILA. Presidente de la Federación Inmobiliaria de la república Argentina (FIRA) desde 2012 a 2016, Presidente del Colegio de Corredores Inmobiliarios de Santa Fe sede Rosario (COCIR) desde 2011 a 2015, Presidente de la Cámara de Empresas Inmobiliarias de Rosario (CADEIROS) desde 2007 a 2011.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </section>

            <br /><br /> <br />

            <section className="section">
                <Typography variant='h4' className='heading'>
                    RED CILA
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        background: 'var(--blue)',
                        color: 'white',
                        padding: '4rem !important'
                    }}>
                        <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                            Las asociaciones miembros de CILA pueden sumarse al trabajo conjunto mediante la adhesión a IUCILA y su incorporación a la RED LATINOAMERICANA DE FORMACIÓN INMOBILIARIA, para el desarrollo de formación, capacitación y actualización profesional en las áreas del conocimiento relacionadas al Corretaje y los Negocios Inmobiliarios.
                        </Typography>
                        <Typography variant='h4' sx={{ my: 5 }}>
                            Objetivos de la Red
                        </Typography>
                        <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                            • Recomendar y compartir estrategias de enseñanza y experiencias prácticas para formar profesionales competentes en el campo.
                        </Typography>
                        <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                            • Constituirse en Centros de Información y Apoyo
                        </Typography>
                        <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                            • Articular Prácticas Profesionales para vincular la teoría con la práctica.
                        </Typography>
                        <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                            • Impulsar y co-organizar actividades presenciales complementarias, promover eventos, seminarios u otras actividades prácticas.
                        </Typography>
                        <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                            • Asignar mentores expertos en corretaje inmobiliario para brindar orientación personalizada a los estudiantes.
                        </Typography>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </section>

            <br /><br /><br />
        </>
    )
}

export default About