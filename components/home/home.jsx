"use client"
import Grid from '@mui/material/Grid';
import {
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Box,
    Button,
} from '@mui/material';
import SouthIcon from '@mui/icons-material/South';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import BadgeIcon from '@mui/icons-material/Badge';
import WorkIcon from '@mui/icons-material/Work';
import { events, newsData, advantages } from './data';
import './home.css';

const BackgroundVideo = () => {
    return (
        <div className='bgVideoContainer'>
            <video autoPlay loop muted>
                <source src="/assets/home/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

const HomePage = () => {
    return (
        <>
            <Grid container className="homeMainContainer">
                <Grid item xs={1}></Grid>
                <Grid item sm={12} md={9} lg={8} xl={6} className="homeTextContainer" sx={{ pl: 5 }}>
                    <Typography variant="h2" gutterBottom
                        sx={{
                            fontWeight: 'bold',
                            color: 'var(--yellow)',
                        }}>
                        Inspiramos la jerarquización del corretaje
                    </Typography>
                    <Typography variant="h6" gutterBottom
                        sx={{ color: 'white', fontWeight: 600 }}
                    >
                        Somos el Instituto de Formación Oficial del sector inmobiliario latinoamericano. 700.000 corredores en 18 países conforman la Confederación Inmobiliaria Latinoamericana (CILA)
                    </Typography>
                </Grid>
                <div className="overlay"></div>
            </Grid>

            <section>
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
                                    • Evaluar y reconocer los conocimientos básicos de los potenciales estudiantes.
                                </Typography>
                                <Typography variant='body1'>
                                    • Facilitar y agilizar el desarrollo de la profesionalización de la actividad.
                                </Typography>
                                <Typography variant='body1'>
                                    • Crear, motivar y desarrollar una comunidad de profesionales especialistas.
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
                                    • Sólida formación teórica y práctica para el ejercicio eficiente y responsable de la profesión de Corretaje y negocios inmobiliarios de propiedades.
                                </Typography>
                                <Typography variant='body1'>
                                    • Formación profesional, técnica y ética, que le permita al egresado ejercer esta actividad con la atención centrada en la satisfacción plena de quien reciba sus servicios.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </section>

            <section>
                <Grid container columns={15}>
                    <Grid item xs={2} sx={{
                        // border: '2px solid red',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-around'
                    }}>
                        <SouthIcon className="aboutIcons" />
                        <Box className="btnBox">
                            <SchoolOutlinedIcon className="aboutIcons" />
                            <Typography variant="h6" gutterBottom className="btn">
                                Programas Académicos
                            </Typography>
                        </Box>
                        <Box className="btnBox">
                            <SchoolOutlinedIcon className="aboutIcons" />
                            <Typography variant="h6" gutterBottom className="btn">
                                Servicios Estudiantiles
                            </Typography>
                        </Box>
                        <Box className="btnBox">
                            <SchoolOutlinedIcon className="aboutIcons" />
                            <Typography variant="h6" gutterBottom className="btn">
                                Aplicar Ahora
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={13}>
                        <Grid container>
                            <Grid item xs={12} sx={{ background: 'var(--blue)' }}>
                                <Typography variant="h4" gutterBottom
                                    sx={{ color: 'white', fontWeight: 600, padding: '3rem 4rem' }}
                                >
                                    Bienvenido a UGD
                                </Typography>
                            </Grid>
                            <Grid item xs={6} className='aboutTextContainer'>
                                <Box className='aboutTextBox' >
                                    <Typography variant="h6" gutterBottom
                                        sx={{ color: 'var(--blue)', fontWeight: 600, }}
                                    >
                                        Inspiramos la jerarquización del corretaje
                                    </Typography>
                                    <Typography variant="body1" gutterBottom
                                        sx={{ color: 'var(--blue)' }}
                                    >
                                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                                    </Typography>
                                    <Button variant="contained" className='newsBtn'>Aprender más</Button>
                                </Box>
                            </Grid>
                            <Grid item xs={6} sx={{
                                height: '100vh',
                                position: "relative"
                            }}>
                                <BackgroundVideo />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </section>

            <br /><br /><br />

            <section>
                <Typography variant="h4" gutterBottom className='heading'>
                    Estudiar corretaje en IUCILA ofrece muchas  ventajas
                </Typography>
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
                                                background: 'var(--blue)',
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
                                                color: 'var(--yellow)',
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

            <br /> <br /><br />

            <section className="eventSection">
                <Typography variant="h4" gutterBottom className='heading'>
                    Próximos Eventos
                </Typography>
                <Grid container spacing={3} sx={{ p: 4 }}>
                    {
                        events.map((event, index) =>
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card sx={{ height: '100%' }}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="140"
                                        image="/assets/home/event-1.png"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" className="eventText" sx={{ fontWeight: 'bold' }}>
                                            {event.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" className="eventText">
                                            {event.desc}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button variant='outlined' sx={{ m: 1 }} className="registerBtn">Registrarse Ahora</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    }
                </Grid>
            </section>

            <section className="newsSection">
                <Typography variant="h4" gutterBottom className='heading'>
                    Últimas Noticias
                </Typography>
                <Grid container spacing={8} sx={{ p: 5 }}>
                    {
                        newsData.map((news, index) =>
                            <Grid item xs={12} sm={6} lg={4} key={index}>
                                <Card sx={{
                                    padding: '3rem 4rem',
                                    backgroundColor: 'var(--yellow)',
                                    color: 'var(--blue)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1.5rem'
                                }}>
                                    <Typography variant="body2" gutterBottom>
                                        {news.date}
                                    </Typography>
                                    <hr />
                                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                                        {news.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.dark" gutterBottom>
                                        {news.desc}
                                    </Typography>
                                    <Button variant="contained" className='newsBtn'>Leer más</Button>
                                </Card>
                            </Grid>
                        )
                    }
                </Grid>
            </section>
        </>
    )
}

export default HomePage;