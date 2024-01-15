import Grid from '@mui/material/Grid';
import { Typography, Box } from '@mui/material';

const FirstSubSection = () => {
    return (
        <section>
            <Grid container sx={{
                // border:'2px solid red',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '3rem',
                backgroundColor: 'var(--blue)',
                color: 'white',
            }}>
                <Box sx={{ m: 'auto' }}>
                    <Typography variant="h3">Inspiramos la jerarquización del corretaje en Latinoamérica
                    </Typography>
                </Box>
            </Grid>
            <Grid container spacing={3} sx={{
                // border: "2px solid red",
                padding: '3rem'
            }}>
                <Grid item xs={3}></Grid>
                <Grid item xs={6} sx={{
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
                <Grid item xs={3}></Grid>
            </Grid>
            <Grid container sx={{
                height: '60vh',
                borderTop: '3px solid var(--yellow)',
                borderBottom: '3px solid var(--yellow)'
            }}>
                <Grid item xs={6} sx={{
                    background: 'var(--yellow)',
                    color: 'var(--blue)',
                    display: 'flex',
                    // flexDirection:'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Box sx={{
                        width: '70%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        gap: '1rem'
                    }}>
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
                <Grid item xs={6} sx={{
                    background: 'var(--blue)',
                    color: 'white',
                    display: 'flex',
                    // flexDirection:'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Box sx={{
                        width: '70%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        gap: '1rem'
                    }}>
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
        </section>
    )
}

export default FirstSubSection