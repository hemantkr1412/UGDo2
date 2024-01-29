import React from 'react';
import Grid from '@mui/material/Grid';
import {
    Box,
    Typography
} from '@mui/material';
import '../About/about.css';

const AcademicProposal = () => {
    return (
        <>
            <br /><br /><br />
            <section className='section'>
                <Typography variant='h4' className='heading'>
                    Propuesta Academica
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        background: 'var(--red)',
                        color: 'white',
                        padding: '4rem !important'
                    }}>
                        <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                            Si cursaste una carrera de Corredor Inmobiliario o similar, se te reconocerán las materias que hayas aprobado.
                        </Typography>
                        <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                            Siendo idóneo con una antigüedad mayor a cinco años en la actividad inmobiliaria, siendo reconocidos y matriculados por los colegios profesionales, otorgamos materias en base a tus competencias laborales.
                        </Typography>
                        <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                            Para obtener este TÍTULO de GRADO UNIVERSITARIO deberás cursar las materias que adeuden luego de ser reconocidos los créditos académicos obtenidos. Este cursado será totalmente Online con materias Cuatrimestrales.
                        </Typography>
                        <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                            Entregándose los Títulos luego de obtenidos durante Los CONGRESOS LATINOAMERICANOS.
                        </Typography>
                        <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                            Los Licenciados CILA, como poseedores del máximo Título profesional, conformarán una Comunidad Especial de Asesoramiento y desarrollo de Negocios Inmobiliarios a nivel Latinoamericano.
                        </Typography>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
                <div style={{
                    width: '40%',
                    margin: 'auto'
                }}>
                    <img
                        src="/assets/academicProposal/img.png"
                        alt=""
                        style={{ height: '100%', width: '100%' }}
                    />
                </div>
            </section>
            <br /><br /><br />
        </>
    )
}

export default AcademicProposal;