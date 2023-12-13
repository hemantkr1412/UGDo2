"use client";
import * as React from 'react';
import {
    AppBar,
    Box,
    Grid,
    Typography,
    Button,
    Menu,
    MenuItem
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './navbar.css';

const pages = [
    'Home',
    { label: 'Quienes Somos', submenu: ['Proposito y actividades', 'Instituciones Fundadoras', 'Antecedentes Fundacionales', 'Autoridades', 'Red CILA', 'Encuesta de necesidades de formacion'] },
    { label: 'Comunidad Academica', submenu: ['Nuestros profesores', 'Referentes notables', 'Nuestros alumnos', 'Sumate!'] },
    { label: 'Propuesta Academica', submenu: ['Diplomaturas', 'Corredor inmobiliario universitario', 'Licenciatura en corretaje y negocios inmobiliarios'] },
    'Equivalencias',
    'Noticias',
    'Contacto',
];

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElsUser, setAnchorElsUser] = React.useState(new Array(pages.length).fill(null));

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleSubMenuOpen = (event, index) => {
        // console.log(`enter ${index}`);
        const newAnchorElsUser = [...anchorElsUser];
        newAnchorElsUser[index] = event.currentTarget;
        setAnchorElsUser(newAnchorElsUser);
    };

    const handleSubMenuClose = (index) => {
        // console.log(`exit ${index}`);
        const newAnchorElsUser = [...anchorElsUser];
        newAnchorElsUser[index] = null;
        setAnchorElsUser(newAnchorElsUser);
    };

    return (
        <AppBar position="static" sx={{ height: '70px' }} className="navbar">
            <Grid container spacing={3} columns={15} sx={{ height: '100%', width: '100%', m: 0 }}>
                <Grid
                    item
                    xs={2}
                    className="logoContainer"
                >
                    <Typography variant="h5" gutterBottom color="light" sx={{ mb: 0 }}>
                        Logo
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={13}
                    className='linksContainer'
                >
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: '1.5rem' }} >
                        {pages.map((page, index) => (
                            <React.Fragment key={index}>
                                {typeof page === 'object' ? (
                                    <div
                                        // onMouseEnter={(e) => handleSubMenuOpen(e, index)}
                                        onMouseLeave={() => handleSubMenuClose(index)}
                                    >

                                        <Button
                                            aria-controls={`submenu-${index}`}
                                            aria-haspopup="true"
                                            onMouseEnter={(e) => handleSubMenuOpen(e, index)}
                                            // onMouseLeave={() => handleSubMenuClose(index)}
                                            className="navBtn"
                                        >
                                            {page.label}
                                        </Button>
                                        <Menu
                                            id={`submenu-${index}`}
                                            anchorEl={anchorElsUser[index]}
                                            open={Boolean(anchorElsUser[index])}
                                            onClose={() => handleSubMenuClose(index)}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'left'
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left'
                                            }}
                                        >
                                            {page.submenu.map((item, subIndex) => (
                                                <MenuItem
                                                    key={subIndex}
                                                    onClick={() => handleSubMenuClose(index)}
                                                    sx={{ color: 'var(--blue)' }}
                                                >
                                                    {item}
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                    </div>
                                ) : (
                                    <Button
                                        key={index}
                                        onClick={handleCloseNavMenu}
                                        className="navBtn"
                                    >
                                        {page}
                                    </Button>
                                )}
                            </React.Fragment>
                        ))}
                        {/* <Button
                            variant="outlined"
                            startIcon={
                                <AccountCircleIcon sx={{ color: 'var(--blue)', transform: 'scale(1.2)' }} />}
                            sx={{
                                color: 'var(--blue)',
                                textTransform: 'capitalize',
                                border: 'none !important',
                                '&:hover': {
                                    background: 'none',
                                },
                            }}
                        >
                            Log In
                        </Button> */}
                    </Box>
                </Grid>
            </Grid>
        </AppBar>
    );
};

export default Navbar;
