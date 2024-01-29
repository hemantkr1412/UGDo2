"use client"
import Grid from '@mui/material/Grid';
import { Typography, Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import './FirstSubSection.css';

const FirstSubSection = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));
    const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <section>
            <Grid container className="firstSectionHeading">
                <Box sx={{ m: 'auto', textAlign: 'center' }}>
                <Typography variant={isExtraSmallScreen ? 'h5' : isSmallScreen ? 'h4' : 'h3'}>
                        Inspiramos la jerarquización del corretaje en Latinoamérica
                    </Typography>
                </Box>
            </Grid>

            <Grid container spacing={3} sx={{ padding: '3rem' }}>
                <Grid item md={2} xl={3} sx={{ display: { xs: 'none', md: 'block' } }}></Grid>
                <Grid item xs={12} md={8} xl={6} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                }}>
                    <Box>
                        <img src="/assets/home/img1.jpg" alt="" />
                    </Box>
                    <Typography sx={{ textAlign: 'justify' }}>Somos el Instituto  de Formación Oficial del sector inmobiliario latinoamericano. 700.000 corredores en 18 países conforman la Confederación Inmobiliaria Latinoamericana (CILA)
                    </Typography>
                </Grid>
                <Grid item md={2} xl={3} sx={{ display: { xs: 'none', md: 'block' } }}></Grid>
            </Grid>

            <Grid container className='objectivesAndValuesMainContainer'>
                <Grid item xs={12} md={6} className='objectivesContainer'>
                    <Box
                        sx={{ width: { sm: '90%', lg: '80%', xl: '70%' } }}
                        className='objectivesAndValuesTextBox'
                    >
                        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                            Nuestros objetivos Institucionales:
                        </Typography>
                        <Box>
                            <Typography variant='body1'>
                                • Promover y facilitar la profesionalización de la actividad inmobiliaria en Latinoamérica.
                            </Typography>
                            <Typography variant='body1'>
                                • Crear y desarrollar una comunidad de profesionales especialistas.
                            </Typography>
                            <Typography variant='body1'>
                                • Evaluar, reconocer y certificar  los conocimientos y competencias de quienes los hayan adquirido mediante distintas vías de formación o mediante el ejercicio profesional.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} className='valuesContainer'>
                    <Box
                        sx={{ width: { sm: '90%', lg: '80%', xl: '70%' } }}
                        className='objectivesAndValuesTextBox'
                    >
                        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                            Valores que promulgamos:
                        </Typography>
                        <Box>
                            <Typography variant='body1'>
                                • Sólida formación teórica y práctica para el ejercicio eficiente y responsable de la profesión de Corretaje y negocios inmobiliarios.
                            </Typography>
                            <Typography variant='body1'>
                                • Formación profesional, técnica y ética, que le permita al egresado ejercer esta actividad con la atención centrada en la satisfacción plena de quien reciba sus servicios.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </section >
    )
}

export default FirstSubSection