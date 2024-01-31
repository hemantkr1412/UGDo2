"use client"
import { useRouter } from "next/navigation";
import Grid from '@mui/material/Grid';
import {
    Box,
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Button,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import '../About/about.css';

const diplomaCoursesData = [
    {
        img: '/assets/home/courses/course-3.png',
        name: 'Diplomatura Universitaria en Tasacion de Inmuebles',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet accusantium amet, enim adipisci voluptatibus.',
        duration: '4 Years',
        page: '/Courses/course3'

    },
    {
        img: '/assets/home/courses/course-4.png',
        name: 'Diplomatura Universitaria en Negociacion y Mkt Inmobiliario',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet accusantium amet, enim adipisci voluptatibus.',
        duration: '2 Years',
        page: '/Courses/course4'
    },
    {
        img: '/assets/home/courses/course-5.png',
        name: 'Diplomatura Universitaria en Proyectos Inmobiliarios',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet accusantium amet, enim adipisci voluptatibus.',
        duration: '3 Years',
        page: '/Courses/course5'
    },
];

const AcademicProposal = () => {
    const router = useRouter();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <br /><br /><br />
            <section className='section'>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} className='heading'>
                    Propuesta Academica
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={1} sx={{ display: { xs: 'none', lg: 'block' } }}></Grid>
                    <Grid item xs={12} lg={10} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        background: 'var(--red)',
                        color: 'white',
                        padding: { xs: '2rem 1rem 2rem 2.5rem !important', sm: '4rem !important' }
                    }}>
                        <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                            Si cursaste una carrera de Corredor Inmobiliario o similar, se te reconocerán las materias que hayas aprobado.
                        </Typography>
                        <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                            Siendo idóneo con una antigüedad mayor a cinco años en la actividad inmobiliaria, siendo reconocidos y matriculados por los colegios profesionales, otorgamos materias en base a tus competencias laborales.
                        </Typography>
                        <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                            Para obtener este TÍTULO de GRADO UNIVERSITARIO deberás cursar las materias que adeuden luego de ser reconocidos los créditos académicos obtenidos. Este cursado será totalmente Online con materias Cuatrimestrales.
                        </Typography>
                        <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                            Entregándose los Títulos luego de obtenidos durante Los CONGRESOS LATINOAMERICANOS.
                        </Typography>
                        <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                            Los Licenciados CILA, como poseedores del máximo Título profesional, conformarán una Comunidad Especial de Asesoramiento y desarrollo de Negocios Inmobiliarios a nivel Latinoamericano.
                        </Typography>
                    </Grid>
                    <Grid item xs={1} sx={{ display: { xs: 'none', lg: 'block' } }}></Grid>
                </Grid>
                <br /><br />

                <Grid container sx={{ display: "flex", justifyContent: "center", my: 5 }}>
                    <Grid item xs={10} sm={9} md={8} lg={6} xl={5}>
                        <img
                            src="/assets/academicProposal/img.png"
                            alt=""
                            style={{ height: '100%', width: '100%' }}
                        />
                    </Grid>
                </Grid>
            </section>

            <Grid container sx={{ margin: '5rem 0' }}>
                <Grid item xs={1} sx={{ display: { xs: 'none', lg: 'block' } }}></Grid>
                <Grid item xs={12} lg={10}>
                    <Grid container spacing={5} sx={{ p: 3 }}>
                        {
                            diplomaCoursesData.map((course, index) =>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Card sx={{
                                        maxWidth: 320,
                                        margin: 'auto',
                                        cursor: 'pointer'
                                    }}
                                        onClick={() => router.push(`http://localhost:3000/${course.page}`)}
                                        key={index}>
                                        <CardMedia
                                            sx={{ height: 190 }}
                                            image={course.img}
                                            title="green iguana"
                                        />
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="body1"
                                                className="personName"
                                                sx={{
                                                    color: 'var(--blue)',
                                                    fontWeight: 'bold',
                                                }}>
                                                {course.name}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                className="personCourse"
                                                sx={{ textAlign: 'justify' }}>
                                                {course.desc}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        }
                    </Grid>
                </Grid>
                <Grid item xs={1} sx={{ display: { xs: 'none', lg: 'block' } }}></Grid>
            </Grid>
            <br /><br />
        </>
    )
}

export default AcademicProposal;