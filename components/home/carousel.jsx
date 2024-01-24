"use client"
import { useState, useEffect } from 'react';
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
    const [slidesToShow, setSlidesToShow] = useState(4);
    const [slidesToScroll, setSlidesToScroll] = useState(2);

    useEffect(() => {
        const updateSlidesToShow = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth >= 1300)
                setSlidesToShow(4);
            else if (screenWidth >= 992)
                setSlidesToShow(3);
            else if (screenWidth >= 600)
                setSlidesToShow(2);
            else {
                setSlidesToShow(1);
                setSlidesToScroll(1);
            }

        };
        updateSlidesToShow();
        window.addEventListener('resize', updateSlidesToShow);

        return () => {
            window.removeEventListener('resize', updateSlidesToShow);
        };
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        // autoplay: true,
        // autoplaySpeed: 300,
        // pauseOnHover: true,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        // initialSlide: 0,
    };

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
                                // width:'20%',
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
                                        sx={{ textAlign: 'justify' }}>
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