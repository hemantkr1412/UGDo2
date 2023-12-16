"use client"
import { useState } from 'react'
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
    const [active, setActive] = useState("");

    const handleCardHover = (index) => setActive(`active${index}`)

    const handleCardOnLeave = () => setActive('')

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
                        Woodsmith Regional School
                    </Typography>
                    <Typography variant="h5" gutterBottom
                        sx={{ color: 'white', fontWeight: 600 }}
                    >
                        Shaping Your Children’s Future
                    </Typography>
                </Grid>
                <div className="overlay"></div>
            </Grid>

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
                                Academic Programs
                            </Typography>
                        </Box>
                        <Box className="btnBox">
                            <SchoolOutlinedIcon className="aboutIcons" />
                            <Typography variant="h6" gutterBottom className="btn">
                                Student Services
                            </Typography>
                        </Box>
                        <Box className="btnBox">
                            <SchoolOutlinedIcon className="aboutIcons" />
                            <Typography variant="h6" gutterBottom className="btn">
                                Apply Now
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={13}>
                        <Grid container>
                            <Grid item xs={12} sx={{ background: 'var(--blue)' }}>
                                <Typography variant="h4" gutterBottom
                                    sx={{ color: 'white', fontWeight: 600, padding: '3rem 4rem' }}
                                >
                                    Welcome to Woodsmith
                                    Regional School
                                </Typography>
                            </Grid>
                            <Grid item xs={6} className='aboutTextContainer'>
                                <Box className='aboutTextBox' >
                                    <Typography variant="h6" gutterBottom
                                        sx={{ color: 'var(--blue)', fontWeight: 600, }}
                                    >
                                        An outstanding secondary school for 7th-12th grade students.
                                    </Typography>
                                    <Typography variant="body1" gutterBottom
                                        sx={{ color: 'var(--blue)' }}
                                    >
                                        I&apos;m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                                    </Typography>
                                    <Button variant="contained" className='newsBtn'>Learn more</Button>
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

            <br /><br /> <br />

            <section>
                <Typography variant="h4" gutterBottom className='heading' sx={{ mb: 4 }}>
                    Estudiar corretaje en IUCILA ofrece muchas  ventajas
                </Typography>
                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8} >
                        <Grid container spacing={3}>
                            {
                                advantages.map((elem, index) =>
                                    <Grid item xs={4} key={index}>
                                        <Box
                                            onMouseEnter={() => handleCardHover(index)}
                                            onMouseLeave={() => handleCardOnLeave()}
                                            className={` ${active === `active${index}` ? `active${index}` : ''}`}
                                            sx={{
                                                height: '100%',
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
                                            {(index === 3 || index === 4) && <LocationCityIcon className='cardsIcon' />}

                                            <Typography variant="h6" sx={{
                                                textAlign: 'center',
                                                color: 'var(--blue)',
                                                fontSize: '1.1rem',
                                                fontWeight: 'bold',
                                                lineHeight: '1.5rem'
                                            }}>{elem.title}</Typography>
                                            <Typography variant="body2" sx={{
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

            <br />

            <section className="eventSection">
                <Typography variant="h4" gutterBottom className='heading'>
                    Upcoming Events
                </Typography>
                <Grid container spacing={3} sx={{ p: 4 }}>
                    {
                        events.map((event, index) =>
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card>
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
                                        <Button variant='outlined' sx={{ m: 1 }} className="registerBtn">Register Now</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    }
                </Grid>
            </section>

            <section className="newsSection">
                <Typography variant="h4" gutterBottom className='heading'>
                    Latest News
                </Typography>
                <Grid container spacing={8} sx={{ p: 5 }}>
                    {
                        newsData.map((news, index) =>
                            <Grid item xs={12} sm={6} lg={4}>
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
                                    <Button variant="contained" className='newsBtn'>Read more</Button>
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