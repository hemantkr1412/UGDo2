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
import '../About/about.css';

const coursesData = [
    {
        img: '/assets/home/courses/course-1.png',
        name: 'Licenciatura en Corrtaje y Negocios Inmobiliarios',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet accusantium amet, enim adipisci voluptatibus.',
        duration: '2 Years'
    },
    {
        img: '/assets/home/courses/course-2.png',
        name: 'Tecnicatura Universitaria en Corretaje y Negocios Inmobiliarios',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet accusantium amet, enim adipisci voluptatibus.',
        duration: '3 Years'
    },
    {
        img: '/assets/home/courses/course-3.png',
        name: 'Diplomatura Universitaria en Tasacion de Inmuebles',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet accusantium amet, enim adipisci voluptatibus.',
        duration: '4 Years'
    },
    {
        img: '/assets/home/courses/course-4.png',
        name: 'Diplomatura Universitaria en Negociacion y Mkt Inmobiliario',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet accusantium amet, enim adipisci voluptatibus.',
        duration: '2 Years'
    },
    {
        img: '/assets/home/courses/course-5.png',
        name: 'Diplomatura Universitaria en Proyectos Inmobiliarios',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet accusantium amet, enim adipisci voluptatibus.',
        duration: '3 Years'
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
    return (
        <section className="carouselSection">
            <Slider {...settings} className='slider' sx={{
                width: '90%',
                margin: 'auto',
                border: '2px solid red'
            }}>
                {
                    coursesData.map((course, index) =>
                        <div>
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
                                            color: 'var(--blue)',
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
                    )
                }
            </Slider>
        </section >
    )
}

export default Carousel;