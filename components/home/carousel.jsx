"use client"
import {
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Button,
} from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './home.css';
import '../about/about.css';
// import { useRouter } from 'next/router';
import Link from 'next/link';

const coursesData = [
    {
        img: '/assets/home/courses/course-1.png',
        name: 'Licenciatura en Corrtaje y Negocios Inmobiliarios',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet accusantium amet, enim adipisci voluptatibus.',
        duration: '2 Years',
        page: '/Courses/course1'
    },
    {
        img: '/assets/home/courses/course-2.png',
        name: 'Tecnicatura Universitaria en Corretaje y Negocios Inmobiliarios',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet accusantium amet, enim adipisci voluptatibus.',
        duration: '3 Years',
        page: '/Courses/course2'

    },
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

const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 2,
    // autoplay: true,
    // autoplaySpeed: 300,
    // pauseOnHover: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    // initialSlide: 0,
};

const arrowStyle = {
    display: "block",
    position: 'absolute',
    top: '9.5rem',
    zIndex: 100,
    transform: 'scale(2)'
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (

        <div
            className={className}
            style={{
                ...style,
                ...arrowStyle,
                left: '4rem',
            }}
            onClick={onClick}
        />
    );
}

function SampleNextArrow(props) {


    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                ...arrowStyle,
                right: '4rem',
            }}
            onClick={onClick}
        />
    );
}

const Carousel = () => {
// const router= useRouter()

    return (
        <section className="carouselSection">
            <Slider {...settings} className='slider' sx={{
                width: '90%',
                margin: 'auto',
                border: '2px solid red'
            }}>
                {
                    coursesData.map((course, index) =>
                    <Link href={(course.page)}>
                        <div >
                            <Card sx={{
                                // border: '2px solid red',
                                maxWidth: 320,
                                margin: 'auto',
                            }} key={index}>
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
                                            color: 'var(--red)',
                                            fontWeight: 'bold',
                                        }}>
                                        {course.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        className="personCourse"
                                        sx={{ textAlign: 'justify'}}>
                                        {course.desc}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                        </Link>
                    )
                }
            </Slider>
        </section >
    )
}

export default Carousel;