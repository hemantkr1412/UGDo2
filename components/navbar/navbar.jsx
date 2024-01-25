"use client";
import { useState, useEffect } from 'react';
import {
    AppBar,
    Box,
    Grid,
    Button,
    Menu,
    MenuItem,
    IconButton
} from '@mui/material';
import Hidden from '@mui/material/Hidden';
import MenuIcon from '@mui/icons-material/Menu';
import './navbar.css';
import { useRouter } from 'next/navigation';
import Sidebar from './Sidebar';

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
    const [anchorElsNav, setAnchorElsNav] = useState(new Array(pages.length).fill(null));
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleSubMenuOpen = (event, index) => {
        console.log(`enter ${index}`);
        const newAnchorElsUser = [...anchorElsNav];
        newAnchorElsUser[index] = event.currentTarget;
        setAnchorElsNav(newAnchorElsUser);
    };

    const handleSubMenuClose = (index) => {
        console.log(`exit ${index}`);
        const newAnchorElsUser = [...anchorElsNav];
        newAnchorElsUser[index] = null;
        setAnchorElsNav(newAnchorElsUser);
    };

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuClose = () => {
        setIsMenuOpen(false);
    };

    return (

        <AppBar position="static" sx={{ height: '70px' }} className="navbar">
            <Grid container spacing={3} columns={15} sx={{ height: '100%', width: '100%', m: 0 }}>
                <Grid
                    item
                    xs={13}
                    md={2}
                    className="logoContainer"
                >
                    <Box sx={{ height: '65%', marginLeft: '2rem' }}>
                        <img src="/logo_white.png" alt="" />
                    </Box>
                </Grid>

                <Hidden mdDown id="page">
                    <Grid
                        item
                        xs={13}
                        className='linksContainer'
                    >
                        <Box sx={{ display: 'flex', flexGrow: 1, gap: '1.5rem' }} >
                            {pages.map((page, index) => (
                                <>
                                    {typeof page === 'object' ? (
                                        <div>
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
                                                anchorEl={anchorElsNav[index]}
                                                open={Boolean(anchorElsNav[index])}
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
                                                            page.label === 'Institucional' && router.push('/about');
                                                            page.label === 'Propuesta Academica' && router.push('/academicProposal');
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
                                            }}
                                            className="navBtn"
                                        >
                                            {page}
                                        </Button>
                                    )}
                                </>
                            ))}
                        </Box>
                    </Grid>
                </Hidden>
                <Hidden mdUp>
                    <Sidebar pageWraoId={"page-wrap"} outerContainerId={"page"} />
                    <div id='page-wrap'></div>
                </Hidden>
            </Grid>
        </AppBar>
    );
};

export default Navbar;
