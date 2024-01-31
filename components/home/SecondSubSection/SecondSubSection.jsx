"use client"
import Grid from '@mui/material/Grid';
import { Typography, Box } from '@mui/material';
import { advantages } from '../data';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import BadgeIcon from '@mui/icons-material/Badge';
import WorkIcon from '@mui/icons-material/Work';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import './SecondSubSection.css';

const SecondSubSection = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));
    const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <section>
            <Grid container className='secondSectionHeading'>
                <Box sx={{ m: 'auto' }}>

                    <Typography variant={isExtraSmallScreen ? 'h5' : isSmallScreen ? 'h4' : 'h3'}>Somos la llave de tu futuro inmobiliario
                    </Typography>
                </Box>
            </Grid>
            <div className='imgContainer'>
                <img src="/assets/home/students4.jpg" alt=""
                    style={{ objectFit: 'cover', objectPosition: 'center top' }} />
                <div className="imgOverlay"></div>
            </div>
            <Grid container sx={{ mt: 4, pt: 4 }}>
                <Grid item lg={2} sx={{ display: { xs: 'none', lg: 'block' } }}></Grid>
                <Grid item xs={12} lg={8} sx={{ px: 4 }}>
                    <Grid container spacing={2}>
                        {
                            advantages.map((elem, index) =>
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Box className='advantagesBox'>
                                        {(index === 0 || index === 1) && <LocalLibraryOutlinedIcon className='cardsIcon' />}
                                        {index === 2 && <AssuredWorkloadIcon className='cardsIcon' />}
                                        {(index === 3 || index === 6) && <LocationCityIcon className='cardsIcon' />}
                                        {(index === 4) && <BadgeIcon className='cardsIcon' />}
                                        {(index === 5) && <WorkIcon className='cardsIcon' />}

                                        <Typography variant="h6" className='advantagesTitle'>{elem.title}</Typography>
                                        <Typography variant="body2" color='#EAECED' sx={{ textAlign: 'justify' }}>{elem.desc}</Typography>
                                    </Box>
                                </Grid>
                            )
                        }
                    </Grid>
                </Grid>
                <Grid item lg={2} sx={{ display: { xs: 'none', xl: 'block' } }}></Grid>
            </Grid>
        </section>
    )
}

export default SecondSubSection;