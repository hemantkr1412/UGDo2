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
import { events } from './data';

const Events = () => {
    return (
        <section className="eventSection">
            <Typography variant="h4" gutterBottom className='heading'>
                Próximos Eventos
            </Typography>
            <Grid container spacing={3} sx={{ p: 4 }}>
                {
                    events.map((event, index) =>
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{ height: '100%' }}>
                                <Box sx={{ height: '55%' }}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="140"
                                        image="/assets/home/event-1.png"
                                    />
                                </Box>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className="eventText" sx={{ fontWeight: 'bold' }}>
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