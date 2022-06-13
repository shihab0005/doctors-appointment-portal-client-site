import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import Calender from '../../Appointments/Calender/Calender';
import AllAppointment from '../AllAppointment/AllAppointment';

const FilterAppointment = () => {
    const [date, setDate] = React.useState(new Date())

    return (
        <Container>
            <Grid container spacing={2} >
                <Grid item xs={12} md={5} lg={5}>
                    <Calender date={date} setDate={setDate}></Calender>
                </Grid>
                <Grid item xs={12} md={7} lg={7}>
                    <AllAppointment date={date}></AllAppointment>
                </Grid>

            </Grid>
        </Container>
    );
};

export default FilterAppointment;