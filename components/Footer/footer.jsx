import React from 'react';
import dynamic from 'next/dynamic';
const List = dynamic(() => require('@mui/material/List'), { ssr: false })
// import List from '@mui/material/List';
import {
    Box,
    Grid,
    Typography,
    Button,
    Menu,
    MenuItem,
    // List,
    ListItem, ListItemText
} from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './footer.css';

const Footer = () => {
    return (
        <section className='footer'>
            <Grid container sx={{
                backgroundColor: 'var(--blue)',
                padding: '3rem',
                color: 'white'
            }}>
                <Grid item xs={2} className='footerBox' sx={{ p: 2 }}>
                    <Typography variant='h5' color='white'>Logo</Typography>
                </Grid>
                <Grid item xs={2} className='footerBox'>
                    <List>
                        {
                            ['Quienes Somos', 'CILA', 'UGD', 'Nuestros alumnos'].map((item, index) =>
                                <ListItem sx={{ pt: 0 }}>
                                    <ListItemText primary={item} />
                                </ListItem>
                            )
                        }
                    </List>
                </Grid>
                <Grid item xs={6} className='footerBox'>
                    <List>
                        {
                            ['Home', 'Sumate', 'Equivalencias', 'Noticias', 'Contacto'].map((item, index) =>
                                <ListItem sx={{ pt: 0 }} key={index}>
                                    <ListItemText primary={item} />
                                </ListItem>
                            )
                        }
                    </List>
                </Grid>
                <Grid item xs={2} className='footerBox' sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem'
                }}>
                    <Box sx={{ lineHeight: '1.2rem' }}>
                        <Typography variant='body1'>500 Terry Francine Street</Typography>
                        <Typography variant='body1'>San Francisco, CA 94158</Typography>
                        <Typography variant='body1'>Phone: 123-456-7890</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
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