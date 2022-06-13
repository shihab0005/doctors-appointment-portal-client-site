import { Alert, Grid, Paper, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import MuiButton from '../../../StyledComponent/MuiButton/MuiButton';
import AppointmentModal from '../AppointmentModal/AppointmentModal';

const Booking = ({ date }) => {
    const bookings = [
        {
            id: 1,
            name: "Teeth Sensitive",
            time: "8:30AM - 10:45PM",
            seat: 7
        },
        {
            id: 2,
            name: "Teeth scaling",
            time: "4:30AM - 6:45PM",
            seat: 10
        },
        {
            id: 3,
            name: "Oral Surgery",
            time: "5:30AM - 8:45PM",
            seat: 10
        },
        {
            id: 4,
            name: "Clening Teeth",
            time: "6:30AM - 9:45PM",
            seat: 13
        },
        {
            id: 5,
            name: "Surgery Teeth",
            time: "2:30AM - 8:45PM",
            seat: 8
        },
        {
            id: 6,
            name: "Root Canels",
            time: "5:30AM - 8:45PM",
            seat: 10
        },
    ]
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography variant='h4' sx={{
                textAlign: "center",
                fontWeight: 600, color: "#03B881"
            }}>
                Your Available Appointment On {new Date(date).toDateString()}
            </Typography>
            {bookingSuccess && <Alert severity="success">Appointment Successfully Fixed</Alert>}
            <Grid container spacing={3} sx={{ mt: 5, textAlign: "center" }}>
                {
                    bookings.map(({ id, name, time, seat }) => <Grid xs={12} sm={6} lg={4} key={id} sx={{ p: 2 }}>
                        <Paper elevation={4} sx={{ p: 2 }}>
                            <Typography variant='h5' sx={{ color: "#7E48DC", fontWeight: 600 }}>{name}</Typography>
                            <Typography variant='h6'>{time}</Typography>

                            <Typography sx={{ color: "#F36407", fontWeight: 600, mb: 2 }} variant='h6'>{seat} Available</Typography>

                            <MuiButton onClick={handleOpen}>Appointment</MuiButton>

                            <AppointmentModal date={date} time={time} name={name} open={open} handleClose={handleClose} setBookingSuccess={setBookingSuccess} />
                        </Paper>

                    </Grid>)
                }
            </Grid>


        </Container >
    );
};

export default Booking;