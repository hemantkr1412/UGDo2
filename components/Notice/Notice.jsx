"use client"
import { usePathname } from 'next/navigation';
import Grid from '@mui/material/Grid';
import {
    Typography,
    Card,
    Button,
} from '@mui/material';
import { newsData } from './newsData';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import '../Home/Home.css';

const Notice = () => {
    const path = usePathname();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <section className="newsSection">
            <Typography variant={isSmallScreen ? 'h5' : 'h4'} gutterBottom className='heading' sx={{ textAlign: path === '/noticias' && 'center' }}>
                Últimas Noticias
            </Typography>
            <Grid container columnSpacing={{ xs: 3, md: 8 }} rowSpacing={{ xs: 5, sm: 3, md: 5 }} sx={{ p: { xs: 3, sm: 5 } }}>
                {
                    newsData.map((news, index) =>
                        <Grid item xs={12} sm={6} lg={4} key={index}>
                            <Card className="eventCard" sx={{
                                height: '100%',
                                padding: { xs: '3rem 4rem', sm: '3rem 1rem', md: '3rem 4rem' },
                                backgroundColor: 'var(--green)',
                                color: 'white',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem'
                            }}>
                                <Typography variant="body2" gutterBottom>
                                    {news.date}
                                </Typography>
                                <hr />
                                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                                    {news.title}
                                </Typography>
                                <Typography variant="body1" color="text.dark" gutterBottom>
                                    {news.desc}
                                </Typography>
                                <Button
                                    variant="contained"
                                    className='newsBtn'
                                    onClick={() => window.open(news.link, '_blank')}
                                >
                                    Leer más</Button>
                            </Card>
                        </Grid>
                    )
                }
            </Grid>
        </section>
    )
}

export default Notice;