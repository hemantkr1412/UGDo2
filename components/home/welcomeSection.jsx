import Grid from '@mui/material/Grid';
import {
    Typography,
    Box,
    Button,
} from '@mui/material';
import SouthIcon from '@mui/icons-material/South';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

const BackgroundVideo = () => {
    return (
        <div className='bgVideoContainer'>
            <video autoPlay loop muted>
                <source src="/assets/home/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

const WelcomeSection = () => {
    return (
        <section>
            <Grid container columns={15}>
                <Grid item xs={2} sx={{
                    // border: '2px solid red',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-around'
                }}>
                    <SouthIcon className="aboutIcons" />
                    <Box className="btnBox">
                        <SchoolOutlinedIcon className="aboutIcons" />
                        <Typography variant="h6" gutterBottom className="btn">
                            Programas Académicos
                        </Typography>
                    </Box>
                    <Box className="btnBox">
                        <SchoolOutlinedIcon className="aboutIcons" />
                        <Typography variant="h6" gutterBottom className="btn">
                            Servicios Estudiantiles
                        </Typography>
                    </Box>
                    <Box className="btnBox">
                        <SchoolOutlinedIcon className="aboutIcons" />
                        <Typography variant="h6" gutterBottom className="btn">
                            Aplicar Ahora
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={13}>
                    <Grid container>
                        <Grid item xs={12} sx={{ background: 'var(--blue)' }}>
                            <Typography variant="h4" gutterBottom
                                sx={{ color: 'white', fontWeight: 600, padding: '3rem 4rem' }}
                            >
                                Bienvenido a UGD
                            </Typography>
                        </Grid>
                        <Grid item xs={6} className='aboutTextContainer'>
                            <Box className='aboutTextBox' >
                                <Typography variant="h6" gutterBottom
                                    sx={{ color: 'var(--blue)', fontWeight: 600, }}
                                >
                                    Inspiramos la jerarquización del corretaje
                                </Typography>
                                <Typography variant="body1" gutterBottom
                                    sx={{ color: 'var(--blue)' }}
                                >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam quidem obcaecati nobis accusamus blanditiis, adipisci nisi ut tenetur impedit laborum, ullam ipsum molestiae doloribus explicabo molestias laboriosam nam et! Rerum, voluptas. Inventore, facilis itaque?
                                </Typography>
                                <Button variant="contained" className='newsBtn'>Aprender más</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={6} sx={{
                            height: '100vh',
                            position: "relative"
                        }}>
                            <BackgroundVideo />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </section>
    )
}

export default WelcomeSection;