"use client"
import {useRouter} from "next/navigation";
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
    const router= useRouter();

    return (
        <>
            <br /><br /><br />
            <Grid container sx={{margin:'4rem 0'}}>
                <Grid item xs={1} sx={{ display: { xs: 'none', lg: 'block' } }}></Grid>
                <Grid item xs={12} lg={10}>
                    <Grid container spacing={5} sx={{p:3}}>
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
            <br /><br /><br />
        </>
    )
}

export default AcademicProposal;