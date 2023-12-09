import Grid from '@mui/material/Grid';
import {
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Button
} from '@mui/material';
import './home.css';

const events = [
    { title: 'Innovation Meetup', desc: 'Sun, 01 Apr | 500 Terry A Francois Blvd' },
    { title: 'Volunteering Day', desc: 'Sun, 01 Apr | 500 Terry A Francois Blvd' },
    { title: 'Fall Orientation Week', desc: 'Sun, 01 Apr | 500 Terry A Francois Blvd' },
    { title: 'Annual Book Club is Back', desc: 'Sun, 01 Apr | 500 Terry A Francois Blvd' },
    { title: 'Mathematics Tutoring Program', desc: 'Sun, 01 Apr | 500 Terry A Francois Blvd' },
];

const newsData = [
    {
        date: 'Friday 1 June 2035',
        title: 'New Auditorium at Woodsmith to Launch Next Fall',
        desc: 'This item is connected to a text field in your content collection. Double click to add your own content. Click the Content Manager icon on the add panel to your left.',
    },
    {
        date: 'Friday 1 June 2035',
        title: 'New Auditorium at Woodsmith to Launch Next Fall',
        desc: 'This item is connected to a text field in your content collection. Double click to add your own content. Click the Content Manager icon on the add panel to your left.',
    },
    {
        date: 'Friday 1 June 2035',
        title: 'New Auditorium at Woodsmith to Launch Next Fall',
        desc: 'This item is connected to a text field in your content collection. Double click to add your own content. Click the Content Manager icon on the add panel to your left.',
    },
];

const HomePage = () => {
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
                        Woodsmith Regional School
                    </Typography>
                    <Typography variant="h5" gutterBottom
                        sx={{ color: 'white', fontWeight: 600 }}
                    >
                        Shaping Your Children’s Future
                    </Typography>
                </Grid>
                <div className="overlay"></div>
            </Grid>


            <section className="eventSection">
                <Typography variant="h4" gutterBottom className='heading'>
                    Upcoming Events
                </Typography>
                <Grid container spacing={3} sx={{ p: 4 }}>
                    {
                        events.map((event, index) =>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="140"
                                        image="/assets/home/event-1.png"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" className="eventText" sx={{ fontWeight: 'bold' }}>
                                            {event.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" className="eventText">
                                            {event.desc}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button variant='outlined' sx={{ m: 1 }} className="registerBtn">Register Now</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    }
                </Grid>
            </section>

            <section className="newsSection">
                <Typography variant="h4" gutterBottom className='heading'>
                    Latest News
                </Typography>
                <Grid container spacing={8} sx={{ p: 5 }}>
                    {
                        newsData.map((news, index) =>
                            <Grid item xs={12} sm={6} lg={4}>
                                <Card sx={{
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
                                    <Button variant="contained" className='newsBtn'>Read more</Button>
                                </Card>
                            </Grid>
                        )
                    }
                </Grid>
            </section>
        </>
    )
}

export default HomePage;