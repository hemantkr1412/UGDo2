import Grid from '@mui/material/Grid';
import {
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Box,
    Button,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { events } from './data';

const Events = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <section className="eventSection">
            <Typography variant={isSmallScreen ? 'h5' : 'h4'} gutterBottom className='heading'>
                Próximos Eventos
            </Typography>
            <Grid container spacing={5} sx={{ p: 4 }}>
                {
                    events.map((event, index) =>
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card>
                                <Box sx={{ height: '55%' }}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="140"
                                        image="/assets/home/event-1.png"
                                    />
                                </Box>
                                <CardContent>
                                    <Typography gutterBottom variant={isSmallScreen ? 'h6' : 'h5'} component="div" className="eventText" sx={{ fontWeight: 'bold' }}>
                                        {event.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" className="eventText">
                                        {event.desc}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant='outlined' sx={{ m: 1 }} className="registerBtn">Registrarse Ahora</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                }
            </Grid>
        </section>
    )
}

export default Events;