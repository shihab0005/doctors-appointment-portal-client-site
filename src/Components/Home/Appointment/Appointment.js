import { Grid, Typography } from '@mui/material';
import { Container, } from '@mui/system';
import React from 'react';
import doctorImg from "../../../images/doctor.png"
import MuiButton from '../../../StyledComponent/MuiButton/MuiButton';

const Appointment = () => {
    const style = {
        backgroundColor: "#33749E",
        // height: 380,
        display: "flex",
        alignItems: "center",
        marginBottom: 100,
        marginTop: 100


    }
    return (
        <Container style={style}>

            <Grid container spacing={2} sx={{ alignItems: "center" }}>
                <Grid item xs={12} sm={12} md={5} lg={5}>
                    <img src={doctorImg} width="100%" alt="Doctor_Image" style={{ marginBottom: -6, marginTop: -130 }} />
                </Grid>
                <Grid item xs={12} sm={12} md={5} lg={5}>
                    <Typography variant='h5' sx={{ fontWeight: 500, color: "#0BE690" }}>APPOINTMRNT</Typography>

                    <Typography variant='h4' sx={{ my: 2, color: "#fff" }}>Make An Appointment Today</Typography>

                    <Typography variant='body1' sx={{ my: 2, color: "#fff" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio harum eius porro! Inventore blanditiis rem repudiandae eligendi eius ipsum nam.</Typography>

                    <MuiButton>Learn More..</MuiButton>
                </Grid>

            </Grid>

        </Container>
    );
};

export default Appointment;