"use client"
import Grid from '@mui/material/Grid';
import {
    Box,
    Typography
} from '@mui/material';
import '../../About/about.css'
import '../academicCommunity.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import '../../About/About.css';

const Directivos = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <br /><br /><br />

            <section className="section">
                <Typography
                    variant={isSmallScreen ? 'h5' : 'h4'}
                    className='heading'>
                    DIRECTOR ACADÉMICO
                </Typography>
                <Grid container spacing={3}>
                    <Grid
                        item
                        xs={1}
                        sx={{ display: { xs: 'none', lg: 'block' } }}>
                    </Grid>
                    <Grid item xs={12} md={6} lg={5} className="imgGrid">
                        <div className="imgDiv">
                            <img src="/assets/academicCommunity/director.png" alt="" className="memberImg" />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={5} className='textGrid'>
                        <Box className="textGridBox">
                            <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                                <b>Arq. Javier Grandinetti</b>
                            </Typography>
                            <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                                Director de Carrera Licenciatura en Corretaje Inmobiliario de la Universidad Gastón Dachary. Docente universitario en Corretaje inmobiliario en la Pontificia Universidad Católica Argentina desde el año 2016. Socio gerente de Grandinetti Negocios Inmobiliarios en Rosario. Cumplió funciones como Presidente de CILA en 2017, actualmente es miembro permanente del Consejo Consultivo y Presidente del Comité de Congresos de CILA. Presidente de la Federación Inmobiliaria de la república Argentina (FIRA) desde 2012 a 2016, Presidente del Colegio de Corredores Inmobiliarios de Santa Fe sede Rosario (COCIR) desde 2011 a 2015, Presidente de la Cámara de Empresas Inmobiliarias de Rosario (CADEIROS) desde 2007 a 2011
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={1}
                        sx={{ display: { xs: 'none', lg: 'block' } }}>
                    </Grid>
                </Grid>
            </section>

            <br /><br /><br />

            <section className="section">
                <Typography
                    variant={isSmallScreen ? 'h5' : 'h4'}
                    className='heading'>
                    Rector de Universidad Gastón Dachary
                </Typography>
                <Grid container spacing={3}>
                    <Grid
                        item
                        xs={1}
                        sx={{ display: { xs: 'none', lg: 'block' } }}>
                    </Grid>
                    <Grid item xs={12} md={6} lg={5} className="imgGrid">
                        <div className="imgDiv">
                            <img src="/assets/academicCommunity/rector.jpg" alt="" className="memberImg" />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={5} className='textGrid'>
                        <Box className="textGridBox">
                            <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                                <b>Ing. Luis Lichowski</b>
                            </Typography>
                            <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                                Rector de la Universidad Gastón Dachary
                            </Typography>
                            <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                                Presidente Internacional de la Red Interuniversitaria para el Desarrollo y la Integración Regional.
                            </Typography>
                            <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                                Ingeniero en Construcciones. Posgrado en Desarrollo Económico. Doctorando en Gestión y Política de Educación Superior. Experto en Cooperación para el Desarrollo.
                            </Typography>
                            <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                                Ex-Ministro de Industria de la Provincia de Misiones
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={1}
                        sx={{ display: { xs: 'none', lg: 'block' } }}>
                    </Grid>
                </Grid>
            </section>

            <br /><br /><br />

            <section className="section">
                <Typography
                    variant={isSmallScreen ? 'h5' : 'h4'}
                    className='heading'>
                    Coordinador del comité de profesionalización de CILA
                </Typography>
                <Grid container spacing={3}>
                    <Grid
                        item
                        xs={1}
                        sx={{ display: { xs: 'none', lg: 'block' } }}>
                    </Grid>
                    <Grid item xs={12} md={6} lg={5} className="imgGrid">
                        <div className="imgDiv">
                            <img src="/assets/academicCommunity/coordinator.jpg" alt="" className="memberImg" />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={5} className='textGrid'>
                        <Box className="textGridBox">
                            <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                                <b>C.I. Eduardo Brigada</b>
                            </Typography>
                            <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                                Corredor Inmobiliario, con 45 años ejerciendo la profesión.Profesor Superior.
                            </Typography>
                            <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                                Actual coordinador de la Comisión de Profesionalización y Educación de CILA.
                            </Typography>
                            <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                                Presidente de la Confederación Inmobiliaria Latinoamericana  (2022).   Presidente de la Federación Inmobiliaria de la República Argentina  (2016-2020).  Presidente  del Colegio de Corredores Inmobiliarios de la Provincia de Santa Fé. (2011-2014).  Gerente General de la  firma Guastavino e Imbert y Cia S.R.L.,  fundada en 1927 (Decana de las  Inmobiliaria de Santa Fe, Argentina).
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={1}
                        sx={{ display: { xs: 'none', lg: 'block' } }}>
                    </Grid>
                </Grid>
            </section>

            <br /><br /><br />
        </>
    )
}

export default Directivos;