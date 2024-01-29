import Grid from '@mui/material/Grid';
import { Typography, Box } from '@mui/material';
import { advantages } from './data';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import BadgeIcon from '@mui/icons-material/Badge';
import WorkIcon from '@mui/icons-material/Work';

const SecondSubSection = () => {
    return (
        <section>
            <Grid container sx={{
                // border:'2px solid red',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '3rem',
                marginTop: '5rem',
                backgroundColor: 'var(--green)',
                color: 'var(--red)',
            }}>
                <Box sx={{ m: 'auto' }}>
                    <Typography variant="h3">Somos la llave de tu futuro inmobiliario
                    </Typography>
                </Box>
            </Grid>
            <div
                style={{
                    // border: '2px solid red',
                    // background: 'var(--red) url(/assets/home/students2.webp) no-repeat center',
                    height: '65vh',
                    width: '100%',
                    position:'relative'
                }}
            >
                <img src="/assets/home/students4.jpg" alt="" 
                style={{objectFit:'cover',objectPosition:'center top'}}/>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '65vh',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}></div>
            </div>
            <Grid container sx={{ mt: 4, pt: 4 }}>
                <Grid item xs={2}></Grid>
                <Grid item xs={8} >
                    <Grid container spacing={2}>
                        {
                            advantages.map((elem, index) =>
                                <Grid item xs={4} key={index}>
                                    <Box
                                        sx={{
                                            height: '100%',
                                            background: 'var(--red)',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'start',
                                            gap: '1rem',
                                            padding: '1rem',
                                            transition: 'background-color 0.3s ease',
                                        }}>
                                        {(index === 0 || index === 1) && <LocalLibraryOutlinedIcon className='cardsIcon' />}
                                        {index === 2 && <AssuredWorkloadIcon className='cardsIcon' />}
                                        {(index === 3 || index === 6) && <LocationCityIcon className='cardsIcon' />}
                                        {(index === 4) && <BadgeIcon className='cardsIcon' />}
                                        {(index === 5) && <WorkIcon className='cardsIcon' />}

                                        <Typography variant="h6" sx={{
                                            textAlign: 'center',
                                            color: 'var(--green)',
                                            fontSize: '1.1rem',
                                            fontWeight: 'bold',
                                            lineHeight: '1.5rem'
                                        }}>{elem.title}</Typography>
                                        <Typography variant="body2" color='#EAECED' sx={{
                                            textAlign: 'justify',
                                        }}>{elem.desc}</Typography>
                                    </Box>
                                </Grid>
                            )
                        }
                    </Grid>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </section>
    )
}

export default SecondSubSection;