import { Box, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';

import React from 'react';
import CallSharpIcon from '@mui/icons-material/CallSharp';
import MailSharpIcon from '@mui/icons-material/MailSharp';

const Doctor = (props) => {
    const { Doctor_name, Doctor_specialized, Doctor_email, Doctor_phone, Doctor_image } = props.doctor;
    return (

        <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    image={Doctor_image}
                />
                <CardContent>
                    <Typography variant="h4">
                        {Doctor_name}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: "700", mb: 3 }}>
                        {Doctor_specialized}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography><CallSharpIcon /></Typography>
                        <Typography variant="body" >
                            {Doctor_phone}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                        <Typography><MailSharpIcon /></Typography>
                        <Typography variant="body" >
                            {Doctor_email}</Typography>
                    </Box>

                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>


                </CardActions>
            </Card>
        </Grid>


    );
};

export default Doctor;