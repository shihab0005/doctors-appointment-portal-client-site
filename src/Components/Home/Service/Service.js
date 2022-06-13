import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';


const Service = (props) => {
    const { name, description, image } = props.service;
    return (
        <Grid item xs={12} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '70px', margin: '0 auto' }}
                    image={image}
                    alt="green iguana"
                />
                <CardContent>

                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>

                    <Typography sx={{ textAlign: "justify" }} variant="body2">
                        {description}
                    </Typography>
                </CardContent>

            </Card>
        </Grid >
    );
};

export default Service;