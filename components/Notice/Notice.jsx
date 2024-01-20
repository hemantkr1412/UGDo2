"use client"
import { usePathname } from 'next/navigation';
import Grid from '@mui/material/Grid';
import {
    Typography,
    Card,
    Button,
} from '@mui/material';
import { newsData } from './newsData';
import '../Home/Home.css';

const Notice = () => {
    const path = usePathname();
    console.log(path);

    return (
        <section className="newsSection">
            <Typography variant="h4" gutterBottom className='heading' sx={{ textAlign: path === '/noticias' && 'center' }}>
                Últimas Noticias
            </Typography>
            <Grid container columnSpacing={8} rowSpacing={5} sx={{ p: 5 }}>
                {
                    newsData.map((news, index) =>
                        <Grid item xs={12} sm={6} lg={4} key={index}>
                            <Card sx={{
                                height: '100%',
                                padding: '3rem 4rem',
                                backgroundColor: 'var(--yellow)',
                                color: 'var(--blue)',
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