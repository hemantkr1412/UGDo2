import Grid from '@mui/material/Grid';
import {
    Card,
    CardMedia,
    Typography,
    CardContent,
    CardActions,
    Button
} from '@mui/material';
import { professors } from './professorData';
import '../../About/about.css'
import '../academicCommunity.css';

const Professors = () => {
    return (
        <>
            <section>
                <div style={{ height: '65vh' }}>
                    <img src="/assets/academicCommunity/professors/img3.jpeg" alt="" className="bgImage" />
                    <div className="bgImageOverlay"></div>
                </div>
                <Grid container sx={{
                    padding: '4rem 0',
                    color: 'white',
                    backgroundColor: 'var(--blue)',
                }}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10} sx={{
                        // border:'2px solid red'
                    }}>
                        <Typography>Nuestro cuerpo docente está compuesto por profesionales universitarios de dilatada trayectoria  en el  ejercicio de la actividad inmobiliaria, con lo que sus clases y ejemplos están directamente vinculados a caso concretos, lo que asegura la pertinencia y actualidad de los conocimientos y experiencias transmitidas.  A su vez, estos cuentan con el apoyo de especialistas en pedagogía, que los asesoran y apoyan en el desarrollo de material, de las aulas virtuales y en las actividades docentes.
                        </Typography>
                        <Typography sx={{ mt: 1 }}>A través de CILA y sus referentes, entablamos vínculos con los referentes de la profesión en distintos países, lo que nos permite asegurar diversidad de miradas y atender las particularidades en cada región.

                        </Typography>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </section>

            <br /><br />

            <section className="section academicCommunitySection">
                <Typography variant='h4' className='heading'>
                    Nuestros profesores
                </Typography>
                <Grid container spacing={3} sx={{ p: 3 }}>
                    {
                        professors.map((professor, index) =>
                            <Grid item xs={2}>
                                <Card sx={{ maxWidth: 345 }} key={index}>
                                    <CardMedia
                                        sx={{ height: 180 }}
                                        image={`${index % 2 ? '/assets/academicCommunity/professors/professor-1.jpg' : '/assets/academicCommunity/professors/professor-2.png'}`}
                                        title="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div" className="personName">
                                            {professor.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" className="personCourse">
                                            {professor.department}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button variant="text" sx={{ textTransform: 'lowercase' }}>
                                            {professor.email}
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    }
                </Grid>
            </section>
            <br /><br /><br /><br />
        </>
    )
}

export default Professors