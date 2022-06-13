import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import ChairImg from '../../../images/chair.png'
import Calender from '../Calender/Calender';


const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div style={{ marginTop: "30px" }}>
            <Container sx={{ display: "flex", alignItems: "center" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography variant='h4'>Appointment</Typography>
                        <Calender date={date} setDate={setDate} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <img src={ChairImg} width="100%" alt="Chair_Img" />
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
};

export default AppointmentBanner;