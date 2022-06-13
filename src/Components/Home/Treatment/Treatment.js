import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import treatmentImg from '../../../images/treatment.png'
import MuiButton from '../../../StyledComponent/MuiButton/MuiButton';

const Treatment = () => {
    return (
        <Container sx={{ mt: 10, mb: 10 }}>
            <Typography variant="h4" sx={{ mb: 5, textAlign: "center", fontWeight: "700" }}> Our Treatment Porcess</Typography>
            <Grid container spacing={2} sx={{ alignItems: "center", justifyContent: "space-between" }}>

                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <img src={treatmentImg} style={{ width: "100%", height: "550px" }} alt="treatmentImg" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography variant="h3" sx={{ mb: 5 }}> Exceptional Dental Care, on Your Terms</Typography>

                    <Typography variant="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aliquid non minus optio a sequi dolorem saepe repellendus, aspernatur voluptate! Incidunt ipsum maxime dolores aperiam nam architecto rerum alias, dolorem quae inventore esse earum ea dolorum voluptatibus quod, atque error beatae ratione nisi maiores reprehenderit neque nihil. Sit, alias nostrum!</Typography>

                    <MuiButton sx={{ mt: 5 }}>Learn More</MuiButton>

                </Grid>
            </Grid>

        </Container>
    );
};

export default Treatment;