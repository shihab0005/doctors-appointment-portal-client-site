import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/doctors")
            .then(res => res.json())
            .then(data => setDoctors(data))

    }, [])
    return (
        <Container sx={{ mb: 5 }}>
            <Typography variant="h4" sx={{ mb: 5, textAlign: "center", fontWeight: "700" }}>Our Doctors</Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}>

                    </Doctor>)
                }
            </Grid>


        </Container>
    );
};

export default Doctors;