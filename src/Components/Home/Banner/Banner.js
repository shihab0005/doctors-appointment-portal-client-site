import { Grid, Typography, Button } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import MuiButton from '../../../StyledComponent/MuiButton/MuiButton';
import chairImage from '../../../images/chair.png'

const Banner = () => {
    return (
        <div>
            <Container>
                <Grid container spacing={2} sx={{ mt: 5, alignItems: "center" }}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography variant='h4' sx={{ fontWeight: 600, }}>
                            Your New Smile <br /> Start Here
                        </Typography>
                        <Typography variant='body1' sx={{ lineHeight: 2, my: 3 }}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae consequatur dolorum ipsa mollitia vero dignissimos sapiente doloremque officiis? Doloremque, magnam.
                        </Typography>
                        <MuiButton>Get Appointment</MuiButton>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <img sx={{}} src={chairImage} alt="banner_Image_Chair" width="100%" />
                    </Grid>

                </Grid>
            </Container>

        </div>
    );
};

export default Banner;