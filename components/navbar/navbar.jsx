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
import Link from 'next/link';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './navbar.css';
import { useRouter } from 'next/navigation';

const pages = [
    'Home',
    { label: 'Institucional', submenu: ['Proposito y actividades', 'Instituciones Fundadoras', 'Antecedentes Fundacionales'] },
    { label: 'Comunidad Academica', submenu: ['Directivos', 'Nuestros profesores', 'Nuestros alumnos'] },
    { label: 'Propuesta Academica', submenu: ['Diplomaturas Universitarias en Corretaje y Negocios Inmobiliarios', 'Corredor inmobiliario universitario', 'Licenciatura en corretaje y negocios inmobiliarios'] },
    'Equivalencias',
    'Noticias',
];

const Navbar = () => {
    const router = useRouter();
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
                    <Box sx={{ height: '65%' }}>
                        <img src="/logo_white.png" alt="" />
                    </Box>
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
                                        onMouseLeave={() => handleSubMenuClose(index)}
                                    >
                                        <Button
                                            // component={Link}
                                            // href={page.path}
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
                                                    onClick={() => {
                                                        page.label === 'Institucional' && router.push('/about')
                                                        page.label === 'Propuesta Academica' && router.push('/academicProposal')
                                                        if (page.label === 'Comunidad Academica') {
                                                            switch (item) {
                                                                case 'Directivos':
                                                                    router.push('/academicCommunity/directivos');
                                                                    break;
                                                                case 'Nuestros profesores':
                                                                    router.push('/academicCommunity/professors');
                                                                    break;
                                                                case 'Nuestros alumnos':
                                                                    router.push('/academicCommunity/alumnis');
                                                                    break;
                                                                default:
                                                                    break;
                                                            }
                                                        }
                                                        handleSubMenuClose(index);
                                                    }}
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
                                        onClick={() => {
                                            router.push(`/${page.toLowerCase()}`)
                                            // handleSubMenuClose(index)
                                        }}
                                        // onClick={handleCloseNavMenu}
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
