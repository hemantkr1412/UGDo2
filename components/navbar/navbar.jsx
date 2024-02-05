"use client"
import { useState, useMemo } from 'react';
import { AppBar, Box, Grid, Button, Menu, MenuItem } from '@mui/material';
import Hidden from '@mui/material/Hidden';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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

const routeMappings = {
    'Diplomaturas Universitarias en Corretaje y Negocios Inmobiliarios': '/academicProposal',
    'Corredor inmobiliario universitario': '/Courses/course2',
    'Licenciatura en corretaje y negocios inmobiliarios': '/Courses/course1',
    'Directivos': '/academicCommunity/directivos',
    'Nuestros profesores': '/academicCommunity/professors',
    'Nuestros alumnos': '/academicCommunity/alumnis',
};

const Navbar = () => {
    const router = useRouter();
    const [menuState, setMenuState] = useState({ anchorElsNav: new Array(pages.length).fill(null), isMenuOpen: false });

    const handleSubMenuOpen = (event, index) => {
        const newAnchorElsNav = [...menuState.anchorElsNav];
        newAnchorElsNav[index] = event.currentTarget;
        setMenuState({ ...menuState, anchorElsNav: newAnchorElsNav, isMenuOpen: true });
    };

    const handleSubMenuClose = (index) => {
        setMenuState({ ...menuState, anchorElsNav: menuState.anchorElsNav.map((item, idx) => idx === index ? null : item), isMenuOpen: false });
    };

    const handleSubMenuClick = (item, pageLabel, index) => {
        const route = routeMappings[item];
        // console.log(route);
        if (route)
            router.push(route);
        else if (pageLabel === 'Institucional')
            router.push('/about');

        handleSubMenuClose(index);
    };

    const menuItems = useMemo(() => (
        pages.map((page, index) => (
            typeof page === 'object' ? (
                <div key={index}>
                    <Button
                        aria-controls={`submenu-${index}`}
                        aria-haspopup="true"
                        onMouseEnter={(e) => handleSubMenuOpen(e, index)}
                        sx={{ display: 'flex' }}
                        className="navBtn"
                        endIcon={<KeyboardArrowDownIcon />}
                    >
                        {page.label}
                    </Button>
                    <Menu
                        id={`submenu-${index}`}
                        anchorEl={menuState.anchorElsNav[index]}
                        open={Boolean(menuState.anchorElsNav[index])}
                        onClose={() => handleSubMenuClose(index)}
                        className="dropdownMenu"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                    >
                        {page.submenu.map((item, subIndex) => (
                            <MenuItem
                                key={subIndex}
                                onClick={() => handleSubMenuClick(item, page.label, index)}
                                sx={{ color: 'white' }}
                            >
                                {item}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
            ) : (
                <Button
                    key={index}
                    onClick={() => router.push(`/${page.toLowerCase()}`)}
                    className="navBtn"
                >
                    {page}
                </Button>
            ))
        )
    ), [pages, menuState, handleSubMenuOpen, handleSubMenuClose,handleSubMenuClick, router]);

    return (
        <AppBar position="static" sx={{ height: '70px' }} className="navbar">
            <Grid container spacing={3} columns={15} sx={{ height: '100%', width: '100%', m: 0 }}>
                <Grid item xs={13} lg={2} className="logoContainer">
                    <Box sx={{ height: '65%', marginLeft: '2rem' }}>
                        <img src="/logo_white.png" alt="" />
                    </Box>
                </Grid>
                <Hidden lgDown id="page">
                    <Grid item xs={13} className='linksContainer'>
                        <Box sx={{ display: 'flex', flexGrow: 1, gap: '1.5rem' }} className="linksContainerBox">
                            {menuItems}
                        </Box>
                    </Grid>
                </Hidden>
                <Hidden lgUp>
                    <Grid item xs={2} sx={{ background: 'var(--red) !important', paddingTop: '0 !important' }}>
                        <Sidebar pageWraoId={"page-wrap"} outerContainerId={"page"} />
                        <div id='page-wrap'></div>
                    </Grid>
                </Hidden>
            </Grid>
        </AppBar>
    );
};

export default Navbar;
