"use client"
import { Grid, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const FoundingBackground = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const createGridItem = (imgSrc, textContent, order) => (
        <Grid
            item
            xs={12} md={6} lg={5}
            className={order === 1 ? "imgGrid" : "textGrid"}
            sx={{ order: { xs: order, md: 'unset' } }}
        >
            <div className={order === 1 ? "imgDiv" : "eventImgDiv"}>
                <img src={imgSrc} alt="" />
            </div>
            <div className="textGridBox">
                <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                    {textContent}
                </Typography>
            </div>
        </Grid>
    );

    return (
        <section className='section'>
            <Typography variant={isSmallScreen ? 'h5' : 'h4'} className='heading'>
                Antecedentes fundacionales
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={1} sx={{ display: { xs: 'none', lg: 'block' } }} />
                {
                    createGridItem("/assets/about/president2.png", "Apreciaciones del Presidente de CILA, luego de concretarse el primer convenio de Cooperación entre CILA y UGD: suscripto en Santa Fé, el 30 de marzo/23, por el que se acordó la cooperación para la Lic. en Corretaje.", 2)
                }
                {
                    createGridItem("/assets/about/meet.jpg", "Firma del convenio de CREACIÓN del IUCILA, en momentos previos a la Asamblea General Ordinaria de la Confederación Latinoamericana. Panamá, septiembre de 2023.", 1)
                }
                {
                    createGridItem("/assets/about/meet2.jpg", "EL 21/9/2023, se presentó el IUCILA y sus líneas de trabajo a las autoridades de Federaciones de 19 países Latinoamericanos.", 2)
                }
                <Grid item xs={1} sx={{ display: { xs: 'none', lg: 'block' } }} />
            </Grid>
        </section>
    )
}

export default FoundingBackground;
