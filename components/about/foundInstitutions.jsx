"use client"
import { Grid, Box, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import './about.css'

const typographyStyle = {
    textAlign: 'justify',
};

const programs = [
    { title: 'años formando profesionales', value: '25' },
    { title: 'egresados', value: '4100' },
    { title: 'carreras de grado', value: '18' },
    { title: 'especializaciones y maestrías', value: '5' },
    { title: 'doctorado', value: '1' },
    { title: 'continentes, en que se desempeñan nuestros egresados.', value: '4' }
];

const FoundInstitutions = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <section className='section'>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} className='heading'>
                    Instituciones Fundadoras
                </Typography>
                <Grid container spacing={3}>
                    <Grid
                        item
                        xs={1}
                        sx={{ display: { xs: 'none', lg: 'block' } }}>
                    </Grid>
                    <Grid item xs={12} md={6} lg={5} className="imgGrid">
                        <div className="imgDiv">
                            <img src="/assets/about/logo.png" alt="" />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={5} className='textGrid'>
                        <Box className="textGridBox">
                            <Typography variant='body1' sx={typographyStyle}>
                                La Confederación Inmobiliaria Latinoamericana, fue fundada en 2012, integra a las organizaciones líderes del mercado de bienes raíces en Latinoamérica y representa a más de 700.000 Corredores y Empresas Inmobiliarias en 18 países de Latinoamérica.
                            </Typography>
                            <Typography variant='body1' sx={typographyStyle}>
                                Brinda soporte institucional a toda la comunidad inmobiliaria latinoamericana, defendiendo los intereses profesionales de nuestros agremiados y buscando la integración de los Negocios Internacionales, creando condiciones éticas, competitivas y de excelencia profesional.
                            </Typography>
                            <Typography variant='body1' sx={typographyStyle}>
                                Tiene por objetivo, la profesionalización del sector a todo nivel velando por los intereses de todos y cada  uno de nuestros Miembros Asociados.
                            </Typography>
                            <Typography variant='body1' sx={typographyStyle}>
                                Para saber más de CILA, ingresá a :
                                <Link href="https://cila.la" target="_blank" style={{
                                    color: 'var(--green)'
                                }}> https://cila.la/</Link>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={1}
                        sx={{ display: { xs: 'none', lg: 'block' } }}>
                    </Grid>
                </Grid>
            </section>

            <section className='section'>
                <Grid container spacing={3}>
                    <Grid
                        item
                        xs={1}
                        sx={{ display: { xs: 'none', lg: 'block' } }}>
                    </Grid>
                    <Grid item xs={12} lg={10} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        background: 'var(--red)',
                        color: 'white',
                        padding: { xs: '4rem 1rem 4rem 2.5rem !important', sm: '4rem !important' }
                    }}>
                        <Typography variant='body1' sx={typographyStyle}>
                            En 1997 la Universidad Gastón Dachary fue la primera Universidad autorizada por la Comisión Nacional de Evaluación y Acreditación Universitaria (CONEAU), y se somete periódicamente a las evaluaciones externas del organismo que analiza todas sus funciones, y atiende las recomendaciones para el mejoramiento permanente de la calidad.
                        </Typography>
                        <Typography variant='body1' sx={typographyStyle}>
                            En 1998 la UGD inició sus actividades en la Provincia de Misiones, Argentina, y desde entonces viene ejecutando su plan de crecimiento desarrollando las sedes en la Provincia del Chaco y en la Ciudad de Buenos Aires.
                        </Typography>
                        <Typography variant='body1' sx={typographyStyle}>
                            Desde sus comienzos, la UGD se ha enfocado en desarrollar una  AMPLIA RED DE VÍNCULOS INTERNACIONALES, participando activamente en la Organización Universitaria Interamericana (OUI) y en la Red Interuniversitaria CIDIR. Además se vincula a organizaciones que aportan a su desarrollo en áreas temáticas específicas, como la Guardia Civil Española, para el desarrollo de sus carreras en el área de Seguridad, o la Confederación Inmobiliaria latinoamericana, para el desarrollo de las carreras de Corretaje y Negocios Inmobiliarios.
                        </Typography>
                        <Typography variant='body1' sx={typographyStyle}>
                            En 2017, la UGD acreditó por  la CONEAU su  <b>SISTEMA DE EDUCACIÓN A DISTANCIA (SIED).  El equipo de UGD innova permanentemente a fin de aportar las mejores herramientas y estrategias para lograr los más efectivos métodos de formación.</b>
                        </Typography>
                        <Typography variant='body1' sx={typographyStyle}>
                            Los números de la UGD confirman la vocación de educar e innovar en la oferta de carreras de grado y posgrado para el mundo empresarial, la salud, la educación y la seguridad:
                        </Typography>

                        <Grid container spacing={{ xs: 0, sm: 3 }} className="programsContainer">
                            {programs.map((program, index) => (
                                <Grid key={index} item xs={12} lg={2} className='programsDiv'>
                                    <Typography variant='h6'>{program.title}</Typography>
                                    <Typography variant='h2'>{program.value}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        xs={1}
                        sx={{ display: { xs: 'none', lg: 'block' } }}>
                    </Grid>
                </Grid>
            </section>
        </>
    )
}

export default FoundInstitutions;