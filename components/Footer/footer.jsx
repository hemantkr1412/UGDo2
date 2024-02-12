"use client"
import { useRouter } from 'next/navigation';
import { List } from '@mui/material';
import {
    Box,
    Grid,
    Typography,
    ListItem, ListItemText
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './footer.css';

const routeMappings = {
    'Proposito y actividades': '/about/purposes',
    'Instituciones Fundadoras': '/about/foundingInstitutions',
    'Antecedentes Fundacionales': '/about/foundingBackground',
    'Directivos': '/academicCommunity/directivos',
    'Nuestros profesores': '/academicCommunity/professors',
    'Nuestros alumnos': '/academicCommunity/alumnis',
};

const Footer = () => {
    const router = useRouter();

    const handleClickBtn = (text) => {
        const route = routeMappings[text];
        route ? router.push(route) : router.push(`/${text.toLowerCase()}`)
    }

    return (
        <section className='footer'>
            <Grid container columnSpacing={3} sx={{
                backgroundColor: 'var(--green)',
                padding: { xs: '3rem 1rem', lg: '3rem 2rem' },
                color: 'white'
            }}>
                <Grid item xs={12} sm={3} lg={2} className='footerBox' sx={{ p: 2 }}>
                    <Box className="logoContainer">
                        <img src="/logo_white.png" alt="" />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={3} lg={2} letterSpacing={2} className='footerBox'>
                    <List>
                        {
                            ['Home', 'Proposito y actividades', 'Equivalencias', 'Noticias', 'Directivos'].map((item, index) =>
                                <ListItem sx={{ pt: 0 }} key={index}>
                                    <ListItemText sx={{ cursor: 'pointer' }} primary={item} onClick={() => handleClickBtn(item)} />
                                </ListItem>
                            )
                        }
                    </List>
                </Grid>
                <Grid item xs={12} sm={3} lg={6} className='footerBox'>
                    <List>
                        {
                            ['Instituciones Fundadoras', 'Nuestros alumnos', 'Nuestros profesores', 'Antecedentes Fundacionales'].map((item, index) =>
                                <ListItem sx={{ pt: 0 }} key={index}>
                                    <ListItemText sx={{ cursor: 'pointer' }} primary={item} onClick={() => handleClickBtn(item)} />
                                </ListItem>
                            )
                        }
                    </List>
                </Grid>
                <Grid item xs={12} sm={3} lg={2} className='footerBox' sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem'
                }}>
                    <Box sx={{ lineHeight: '1.2rem' }} className='addressBox'>
                        <Typography variant='body1'>500 Terry Francine Street</Typography>
                        <Typography variant='body1'>San Francisco, CA 94158</Typography>
                        <Typography variant='body1'>Phone: 123-456-7890</Typography>
                    </Box>
                    <Box className="socialMediaBox" sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '1rem'
                    }}>
                        <InstagramIcon />
                        <LinkedInIcon />
                        <TwitterIcon />
                        <WhatsAppIcon />
                    </Box>
                </Grid>
            </Grid>
            <div className='copyrightDiv'>
                <Typography variant='body1' className="copyrightText">
                    © 2035 by UGD. All rights reserved
                </Typography>
            </div>
        </section>
    )
}

export default Footer;