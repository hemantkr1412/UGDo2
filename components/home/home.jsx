import FirstSubSection from './firstSubSection';
import SecondSubSection from './secondSubSection';
import WelcomeSection from './welcomeSection';
import Carousel from './carousel';
import Events from './events';
import Notice from './notice';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import './home.css';
import '../about/about.css';

const Home = () => {
    return (
        <>
            <Grid container className="homeMainContainer">
                <Grid item xs={1}></Grid>
                <Grid item sm={12} md={9} lg={8} xl={6} className="homeTextContainer" sx={{ pl: 5 }}>
                    <Typography variant="h2" gutterBottom
                        sx={{
                            fontWeight: 'bold',
                            color: 'var(--yellow)',
                        }}>
                        Inspiramos la jerarquización del corretaje
                    </Typography>
                    <Typography variant="h6" gutterBottom
                        sx={{ color: 'white', fontWeight: 600 }}
                    >
                        Somos el Instituto de Formación Oficial del sector inmobiliario latinoamericano. 700.000 corredores en 18 países conforman la Confederación Inmobiliaria Latinoamericana (CILA)
                    </Typography>
                </Grid>
                <div className="overlay"></div>
            </Grid>

            <FirstSubSection />
            <SecondSubSection />
            <br /><br />

            <WelcomeSection />

            <br /><br /><br /><br />

            <Carousel />
            <Events />
            <Notice />
        </>
    )
}

export default Home;