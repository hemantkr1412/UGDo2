"use client"
import {Grid} from '@mui/material';
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
        img: '/assets/home/course-1.jpg',
        name: 'Lorem ipsum dolor',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet accusantium amet, enim adipisci voluptatibus.',
        duration: '2 Years',
        page: '/Courses/course1'
    },
    {
        img: '/assets/home/course-2.jpg',
        name: 'Lorem ipsum dolor',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet accusantium amet, enim adipisci voluptatibus.',
        duration: '3 Years',
        page: '/Courses/course2'

    },
    {
        img: '/assets/home/course-3.jpg',
        name: 'Lorem ipsum dolor',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet accusantium amet, enim adipisci voluptatibus.',
        duration: '4 Years',
        page: '/Courses/course3'

    },
    {
        img: '/assets/home/course-1.jpg',
        name: 'Lorem ipsum dolor',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet accusantium amet, enim adipisci voluptatibus.',
        duration: '2 Years',
        page: '/Courses/course4'
    },
    {
        img: '/assets/home/course-2.jpg',
        name: 'Lorem ipsum dolor',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet accusantium amet, enim adipisci voluptatibus.',
        duration: '3 Years',
        page: '/Courses/course5'
    },
    {
        img: '/assets/home/course-3.jpg',
        name: 'Lorem ipsum dolor',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet accusantium amet, enim adipisci voluptatibus.',
        duration: '4 Years',
        page: '/Courses/course6'
    },
];

const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 500,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
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
            {/* <Grid container spacing={3} sx={{ p: 5 }}> */}
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
                                margin: 'auto'
                            }} key={index}>
                                <CardMedia
                                    sx={{ height: 180 }}
                                    image={course.img}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" className="personName">
                                        {course.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" className="personCourse">
                                        {course.desc}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary" sx={{ mt: 1, fontSize: '12px' }}>
                                        {course.duration}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="text" sx={{ textTransform: 'capitalize' }}>
                                        Read more
                                    </Button>
                                </CardActions>
                            </Card>
                            {/* </Grid> */}
                        </div>
                        </Link>
                    )
                }
            </Slider>
            {/* </Grid> */}
        </section>
    )
}

export default Carousel;