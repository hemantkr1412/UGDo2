import { Grid, Box, Typography } from '@mui/material';
import Image from 'next/image';
import president from '../../public/assets/about/president2.png';
import meet from '../../public/assets/about/meet.jpg';
import meet2 from '../../public/assets/about/meet2.jpg';
import './about.css'

const FoundingBackground = () => {
    return (
        <section className='section'>
            <Typography variant='h4' className='heading'>
                Antecedentes fundacionales
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={1}></Grid>
                <Grid item xs={5} className="imgGrid">
                    <div className="imgDiv">
                        <Image src={president} alt="president_image" />
                    </div>
                </Grid>
                <Grid item xs={5} className='textGrid'>
                    <Box className="textGridBox">
                        <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                            Apreciaciones del Presidente de CILA, luego de concretarse el primer convenio de Cooperación entre CILA y UGD: suscripto en Santa Fé, el 30 de marzo/23, por el que se acordó la cooperación para la Lic. en Corretaje.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={1}></Grid>
                <Grid item xs={5} className='textGrid'>
                    <Box className="textGridBox">
                        <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                            Firma del convenio de CREACIÓN del IUCILA, en momentos previos a la Asamblea General Ordinaria de la Confederación Latinoamericana. Panamá, septiembre de 2023.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={5} className="imgGrid">
                    <div className="eventImgDiv">
                        <Image src={meet} alt="event_image" />
                    </div>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={1}></Grid>
                <Grid item xs={5} className="imgGrid">
                    <div className="eventImgDiv">
                        <Image src={meet2} alt="event_image" />
                    </div>
                </Grid>
                <Grid item xs={5} className='textGrid'>
                    <Box className="textGridBox">
                        <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                            EL 21/9/2023, se presentó el IUCILA y sus líneas de trabajo a las autoridades de Federaciones de 19 países Latinoamericanos.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </section>
    )
}

export default FoundingBackground;