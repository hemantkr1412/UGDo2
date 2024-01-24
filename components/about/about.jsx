import FoundInstitutions from './FoundInstitutions';
import FoundingBackground from './FoundingBackground';
import {
    Grid,
    Box,
    Typography
} from '@mui/material';
import './About.css'

const About = () => {
    return (
        <>
            <br /><br />
            <section className='section'>
                <Grid container spacing={3}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10} sx={{
                        marginTop: '2rem',
                        padding: '4rem 0',
                        background: 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(/assets/about/logo-2.png) no-repeat center/contain',
                    }}>
                        <Box className="textGridBox">
                            <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                                El Instituto Universitario de Corretaje Inmobiliario (IUCILA) surge a partir del acuerdo entre la Confederación Inmobiliaria Latinoamericana (CILA) y la Universidad Gastón Dachary (UGD) a los efectos de impulsar la cooperación para la formación, capacitación y actualización profesional en toda Latinoamérica
                            </Typography>
                            <Typography variant='body1' sx={{
                                textAlign: 'justify',
                                fontWeight: 'bold'
                            }}>
                                Generador del conocimiento e impulsor de la jerarquización del Corretaje inmobiliario profesional en América Latina.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </section>

            <br /><br />

            <section className='section'>
                <Typography variant='h4' className='heading'>
                    Actividades a desarrollar
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <Box className="textGridBox" sx={{ width: '70%', m: 'auto' }}>
                            <img
                                src="/assets/about/img2.png"
                                alt=""
                                style={{ margin: 'auto' }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
            </section>

            <br /><br />

            <FoundInstitutions />

            <FoundingBackground />
            <br /><br />
        </>
    )
}

export default About;