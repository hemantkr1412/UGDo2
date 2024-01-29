"use client"
import FoundInstitutions from './FoundInstitutions';
import FoundingBackground from './FoundingBackground';
import {
    Grid,
    Box,
    Typography
} from '@mui/material';
import './About.css'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const About = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <br /><br />
            <section className='section'>
                <Grid container spacing={3}>
                    <Grid item xs={1} sx={{ display: { xs: 'none', lg: 'block' } }}></Grid>
                    <Grid item xs={12} lg={10} sx={{
                        marginTop: '2rem',
                        padding: { xs: '2rem 1rem 2rem 2.5rem !important', lg: '4rem 0 !important' },
                        background: 'linear-gradient(rgb(51 51 51 / 81%), rgb(73 68 68 / 79%)),url(/logo_white.png) no-repeat center/contain',
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
                    <Grid item xs={1} sx={{ display: { xs: 'none', lg: 'block' } }}></Grid>
                </Grid>
            </section>

            <br /><br />

            <section className='section'>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} className='heading'>
                    Actividades a desarrollar
                </Typography>
                <Grid container spacing={3}>
                    <Grid
                        item
                        xs={2}
                        sx={{ display: { xs: 'none', lg: 'block' } }}>
                    </Grid>
                    <Grid item xs={12} lg={8}>
                        <Box className="textGridBox" sx={{ width: '70%', m: 'auto' }}>
                            <img
                                src="/assets/about/img2.png"
                                alt=""
                                style={{ margin: 'auto' }}
                            />
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={1}
                        sx={{ display: { xs: 'none', lg: 'block' } }}>
                    </Grid>
                </Grid>
            </section>

            <br /><br />

            <FoundInstitutions />

            <FoundingBackground />
            <br /><br />
            <br /><br />
        </>
    )
}

export default About;