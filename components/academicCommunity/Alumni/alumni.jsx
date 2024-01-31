
"use client"
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    List,
    Box,
    ListItem,
    ListItemText
} from '@mui/material';
import { alumnis } from './alumnisData';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import '../../About/about.css';
import '../academicCommunity.css';

const Alumni = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [height, setHeight] = useState(window.innerWidth < 400 ? 145 : 180);

    useEffect(() => {
        const handleResize = () => {
            setHeight(window.innerWidth < 400 ? 145 : 180);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <section>
                <div style={{ height: '65vh' }}>
                    <img src="/assets/academicCommunity/alumni/img3.jpg" alt="" className="bgImage" />
                    <div className="bgImageOverlay"></div>
                </div>
                <Grid container sx={{
                    padding: { xs: '3rem 1.5rem', md: '4rem 0' },
                    textAlign: { xs: 'justify', md: 'unset' },
                    color: 'white',
                    backgroundColor: 'var(--red)',
                }}>
                    <Grid item xs={1} sx={{ display: { xs: 'none', md: 'block' } }}></Grid>
                    <Grid item xs={12} md={10}>
                        <Typography>
                            Nuestros alumnos pueden ser tanto jóvenes que buscan una carrera a fin de orientar su desarrollo profesional, como personas que ya están inmersas en la actividad inmobiliaria y buscan fortalecer su perfil, incorporar nuevos conocimientos y tomar contacto con reconocidos profesionales e instituciones del sector.
                        </Typography>
                        <Typography sx={{ mt: 1 }}>
                            De acuerdo a su situación y aspiraciones, pueden acceder a nuestra formación de distintas formas:
                        </Typography>

                        <Typography sx={{ mt: 2 }}>A. Si buscas una buscas una carrera universitaria para tu desarrollo futuro. Puede hacer la licenciatura completa.</Typography>
                        <List>
                            <ListItem>
                                <Typography>• Cuatro años de duración.</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography>• Diplomaturas intermedias.
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography>• Título intermedio de Corredor Inmobiliario.</Typography>
                            </ListItem>
                        </List>

                        <Typography sx={{ mt: 1 }}>B. Si cursaste antes una carrera de Corredor Inmobiliario o similar: Podemos analizar los planes de estudio de tu formación y reconocerte las materias que hayas aprobado, para que puedas cursar la Licenciatura o la tecnicatura en Corretaje inmobiliario.</Typography>
                        <List>
                            <ListItem>
                                <Typography>• Uno a tres años de duración.</Typography>
                            </ListItem>
                        </List>

                        <Typography sx={{ mt: 1 }}>C. Si buscas formaciones de corta duración en un tema específico: Puedes cursar diplomaturas que están formadas por materias de la Licenciatura. Adquieres formación que te permita una pronta inserción salida laboral.
                        </Typography>
                        <List>
                            <ListItem>
                                <Typography>• Cuatro diplomaturas.</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography>• Acreditables para el cursado de la licenciatura.</Typography>
                            </ListItem>
                        </List>

                        <Typography sx={{ mt: 1 }}>D. Si son un idóneo acreditado: Para quienes se desempeñan en la actividad inmobiliaria con una antigüedad mayor a cinco años, siendo reconocidos y matriculados por los colegios profesionales, otorgamos materias en base a las conocimientos y competencias.
                        </Typography>
                    </Grid>
                    <Grid item xs={1} sx={{ display: { xs: 'none', md: 'block' } }}></Grid>
                </Grid>
            </section>

            <br /><br />

            <section className="section academicCommunitySection">
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} className='heading'>
                    Nuestros alumnos
                </Typography>
                <Grid container spacing={3} sx={{ p: 3 }}>
                    {
                        alumnis.map((alumni, index) =>
                            <Grid item xs={6} sm={4} md={3} lg={2}>
                                <Card sx={{ maxWidth: 345 }} key={index} >
                                    <CardMedia
                                        sx={{ height }}
                                        className="personImage"
                                        image={`${index % 2 ? '/assets/academicCommunity/alumni/alumni-1.png' : '/assets/academicCommunity/alumni/alumni-2.png'}`}
                                        title="green iguana"
                                    />
                                    <CardContent className="cardContent">
                                        <Typography gutterBottom variant="h6" component="div" className="personName">
                                            {alumni.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" className="personCourse">
                                            {alumni.program}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    }
                </Grid>
            </section>

            <br /><br /><br />
        </>
    )
}

export default Alumni;