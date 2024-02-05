"use client"
import { useState, useEffect } from 'react';
import {
    Typography,
    Card,
    CardMedia,
    CardContent
} from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { coursesData } from './coursesData';
import '../home.css';
import '../../about/about.css';
import Link from 'next/link';

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
                        <Link href={`${course.page}`} key={`${course.page}`} className="link">
                            <div key={`${course.page}`}>
                                <Card sx={{
                                    maxWidth: 320,
                                    margin: 'auto',
                                    cursor: 'pointer'
                                }}
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
                            </div>
                        </Link>
                    )
                }
            </Slider>
        </section >
    )
}

export default Carousel;