import Grid from '@mui/material/Grid';
import { Typography, List, ListItem } from '@mui/material';
import Image from 'next/image';
import alumniBg from '../../../public/assets/academicCommunity/alumni/alumniBg.jpg';
import '../../about/about.css';
import '../academicCommunity.css';

const Alumni = () => {
    return (
        <section>
            <div style={{ height: '65vh' }}>
                <Image
                    src={alumniBg}
                    alt="alumni-bg-image"
                    className="bgImage"
                />
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
    )
}

export default Alumni;