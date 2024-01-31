import Grid from '@mui/material/Grid';
import {
    Typography,
    Box,
    Button,
} from '@mui/material';
import SouthIcon from '@mui/icons-material/South';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import './WelcomeSection.css';

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
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <section>
            <Grid container columns={15}>
                <Grid item xs={15} sx={{
                    display: { xs: 'block', md: 'none' },
                    background: 'var(--red)',
                }}>
                    <Typography variant={isSmallScreen ? 'h4' : 'h5'} gutterBottom
                        sx={{
                            color: 'white',
                            fontWeight: 600,
                            padding: { xs: '2rem 3rem', md: '3rem 4rem' }
                        }}
                    >
                        Bienvenido a UGD
                    </Typography>
                </Grid>
                <Grid item xs={15} md={2} className="linksContainer">
                    <SouthIcon className="aboutIcons" sx={{ display: { xs: 'none', md: 'block' } }} />
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
                <Grid item xs={15} md={13} className="innerContainer">
                    <Grid container>
                        <Grid item xs={12} sx={{
                            display: { xs: 'none', md: 'block' },
                            background: 'var(--red)',
                        }}>
                            <Typography variant="h4" gutterBottom
                                sx={{ color: 'white', fontWeight: 600, padding: '3rem 4rem' }}
                            >
                                Bienvenido a UGD
                            </Typography>
                        </Grid>
                        <Grid item xs={15} sm={6} sx={{ order: { xs: 2, sm: 1 } }} className='aboutTextContainer'>
                            <Box className='aboutTextBox' >
                                <Typography variant="h6" gutterBottom
                                    sx={{ color: 'white', fontWeight: 600, }}
                                >
                                    Inspiramos la jerarquización del corretaje
                                </Typography>
                                <Typography variant="body1" gutterBottom
                                    sx={{ color: 'white' }}
                                >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam quidem obcaecati nobis accusamus blanditiis, adipisci nisi ut tenetur impedit laborum, ullam ipsum molestiae doloribus explicabo molestias laboriosam nam et! Rerum, voluptas. Inventore, facilis itaque?
                                </Typography>
                                <Button variant="contained">Aprender más</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={15} sm={6} sx={{
                            order: { xs: 1, sm: 2 },
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